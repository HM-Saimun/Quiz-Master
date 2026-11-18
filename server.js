const fs = require('fs');
const http = require('http');
const path = require('path');
const mysql = require('mysql');

const ROOT = __dirname;
const PORT = Number(process.env.PORT || 5000);
const CATEGORIES = ['general', 'science', 'history', 'geography'];
const DIFFICULTIES = ['easy', 'medium', 'hard'];
const TIME_BUDGETS = [2, 5, 10, 15, 20, 30];
const SECONDS_PER_QUESTION = 15;
const QUESTION_TABLES = [];
for (const category of CATEGORIES) {
    for (const difficulty of DIFFICULTIES) {
        QUESTION_TABLES.push({
            name: `${difficulty}_${category}`,
            category,
            difficulty
        });
    }
}

const MIME_TYPES = {
    '.css': 'text/css; charset=utf-8',
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8'
};
const PUBLIC_FILES = new Set([
    'quiz.html',
    'script.js',
    'styles.css'
]);

function query(connection, sql, values) {
    return new Promise((resolve, reject) => {
        connection.query(sql, values || [], (error, results) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}

async function verifyQuestionTables(connection) {
    let total = 0;
    for (const table of QUESTION_TABLES) {
        const tableName = `\`${table.name}\``;
        const result = await query(
            connection,
            `SELECT COUNT(*) AS count FROM ${tableName} WHERE is_active = 1`
        );
        const count = Number(result[0].count);
        total += count;
        console.log(`${table.name}: ${count} active questions`);
    }
    return total;
}

async function ensureSessionTable(connection) {
    await query(connection, `
        CREATE TABLE IF NOT EXISTS quiz_sessions (
            id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            player_name VARCHAR(80) NOT NULL,
            category VARCHAR(32) NOT NULL,
            difficulty VARCHAR(16) NOT NULL,
            question_type VARCHAR(16) NOT NULL,
            status ENUM('in_progress', 'completed', 'time_up', 'abandoned', 'quit') NOT NULL DEFAULT 'in_progress',
            score INT UNSIGNED NOT NULL DEFAULT 0,
            total_questions SMALLINT UNSIGNED NOT NULL,
            answered_questions SMALLINT UNSIGNED NOT NULL DEFAULT 0,
            time_budget_minutes SMALLINT UNSIGNED NOT NULL,
            correct_answers SMALLINT UNSIGNED NOT NULL DEFAULT 0,
            duration_seconds INT UNSIGNED NOT NULL DEFAULT 0,
            time_remaining_seconds INT UNSIGNED NULL,
            started_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            ended_at DATETIME NULL,
            PRIMARY KEY (id),
            KEY idx_quiz_sessions_score (score, ended_at),
            KEY idx_quiz_sessions_player (player_name)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    `);

    const columns = await query(connection, 'SHOW COLUMNS FROM quiz_sessions');
    const columnNames = columns.map(column => column.Field);
    if (!columnNames.includes('answered_questions')) {
        await query(
            connection,
            'ALTER TABLE quiz_sessions ADD COLUMN answered_questions SMALLINT UNSIGNED NOT NULL DEFAULT 0 AFTER total_questions'
        );
    }
    if (!columnNames.includes('time_budget_minutes')) {
        await query(
            connection,
            'ALTER TABLE quiz_sessions ADD COLUMN time_budget_minutes SMALLINT UNSIGNED NOT NULL DEFAULT 5 AFTER answered_questions'
        );
    }
    const statusColumn = columns.find(column => column.Field === 'status');
    if (statusColumn && !statusColumn.Type.includes("'quit'")) {
        await query(
            connection,
            `ALTER TABLE quiz_sessions
             MODIFY status ENUM('in_progress', 'completed', 'time_up', 'abandoned', 'quit')
             NOT NULL DEFAULT 'in_progress'`
        );
    }
}

async function ensureStatsTable(connection) {
    await query(connection, `
        CREATE TABLE IF NOT EXISTS quiz_app_stats (
            id TINYINT UNSIGNED NOT NULL PRIMARY KEY,
            attempted_quiz_count BIGINT UNSIGNED NOT NULL DEFAULT 0
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    `);
    await query(
        connection,
        'INSERT IGNORE INTO quiz_app_stats (id, attempted_quiz_count) VALUES (1, 0)'
    );
}

function sendJson(response, statusCode, data) {
    response.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
    response.end(JSON.stringify(data));
}

function readJsonBody(request) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        let size = 0;
        let tooLarge = false;
        request.on('data', chunk => {
            size += chunk.length;
            if (size > 16 * 1024) {
                tooLarge = true;
                return;
            }
            chunks.push(chunk);
        });
        request.on('end', () => {
            if (tooLarge) {
                const error = new Error('Request body is too large.');
                error.statusCode = 413;
                reject(error);
                return;
            }
            try {
                const body = JSON.parse(Buffer.concat(chunks).toString('utf8'));
                if (!body || typeof body !== 'object' || Array.isArray(body)) {
                    const error = new Error('Request body must be a JSON object.');
                    error.statusCode = 400;
                    reject(error);
                    return;
                }
                resolve(body);
            } catch (error) {
                error.statusCode = 400;
                reject(error);
            }
        });
        request.on('error', reject);
    });
}

function readOptions(value) {
    if (Array.isArray(value)) {
        return value;
    }
    return value ? JSON.parse(value) : [];
}

async function handleQuestions(request, response, connection) {
    if (request.method !== 'GET') {
        sendJson(response, 405, { error: 'Method not allowed.' });
        return;
    }

    const url = new URL(request.url, 'http://localhost');
    const difficulty = url.searchParams.get('difficulty');
    const count = Number(url.searchParams.get('count') || 20);
    const tables = QUESTION_TABLES.filter(item =>
        difficulty === 'mixed' || item.difficulty === difficulty
    );

    if (tables.length === 0 || !Number.isInteger(count) || count < 1 || count > 120) {
        sendJson(response, 400, { error: 'Invalid difficulty or question count.' });
        return;
    }

    const tableQuestions = await Promise.all(tables.map(async table => {
        const rows = await query(
            connection,
            `SELECT type, question, options, answer, explanation, time_limit, points
             FROM \`${table.name}\`
             WHERE is_active = 1
             ORDER BY RAND()
             LIMIT ?`,
            [count]
        );
        return rows.map(row => ({
            ...row,
            category: table.category,
            difficulty: table.difficulty,
            options: readOptions(row.options),
            time_limit: Number(row.time_limit) || 15,
            points: row.points === null ? 10 : Number(row.points)
        }));
    }));

    const questions = tableQuestions.flat();
    for (let index = questions.length - 1; index > 0; index--) {
        const other = Math.floor(Math.random() * (index + 1));
        [questions[index], questions[other]] = [questions[other], questions[index]];
    }
    sendJson(response, 200, questions.slice(0, count));
}

async function handleCreateSession(request, response, connection) {
    if (request.method !== 'POST') {
        sendJson(response, 405, { error: 'Method not allowed.' });
        return;
    }

    const body = await readJsonBody(request);
    const playerName = typeof body.playerName === 'string' ? body.playerName.trim() : '';
    if (!playerName || playerName.length > 80 ||
        (body.difficulty !== 'mixed' && !DIFFICULTIES.includes(body.difficulty)) ||
        body.questionType !== 'mixed' ||
        !TIME_BUDGETS.includes(body.timeBudgetMinutes) ||
        !Number.isInteger(body.totalQuestions) ||
        body.totalQuestions < 1 ||
        body.totalQuestions > body.timeBudgetMinutes * 60 / SECONDS_PER_QUESTION) {
        sendJson(response, 400, { error: 'Provide a name and valid quiz settings.' });
        return;
    }

    const result = await query(
        connection,
        `INSERT INTO quiz_sessions
         (player_name, category, difficulty, question_type, total_questions, time_budget_minutes)
         VALUES (?, 'mixed', ?, ?, ?, ?)`,
        [playerName, body.difficulty, body.questionType, body.totalQuestions, body.timeBudgetMinutes]
    );
    sendJson(response, 201, { sessionId: result.insertId });
}

async function handleCompleteSession(request, response, connection, sessionId) {
    if (request.method !== 'POST') {
        sendJson(response, 405, { error: 'Method not allowed.' });
        return;
    }

    const id = Number(sessionId);
    if (!Number.isSafeInteger(id) || id < 1) {
        sendJson(response, 400, { error: 'Invalid session ID.' });
        return;
    }

    const body = await readJsonBody(request);
    if (!['completed', 'time_up', 'abandoned', 'quit'].includes(body.status) ||
        !Number.isInteger(body.score) || body.score < 0 || body.score > 1000000 ||
        !Number.isInteger(body.answeredQuestions) || body.answeredQuestions < 0 ||
        !Number.isInteger(body.correctAnswers) || body.correctAnswers < 0 ||
        !Number.isInteger(body.durationSeconds) || body.durationSeconds < 0 || body.durationSeconds > 86400 ||
        !Number.isInteger(body.timeRemainingSeconds) || body.timeRemainingSeconds < 0 || body.timeRemainingSeconds > 86400) {
        sendJson(response, 400, { error: 'Invalid quiz result.' });
        return;
    }

    const sessions = await query(
        connection,
        `SELECT total_questions FROM quiz_sessions WHERE id = ? AND status = 'in_progress'`,
        [id]
    );
    if (sessions.length === 0) {
        sendJson(response, 404, { error: 'Active quiz session not found.' });
        return;
    }
    if (body.answeredQuestions > Number(sessions[0].total_questions) ||
        body.correctAnswers > body.answeredQuestions) {
        sendJson(response, 400, { error: 'Quiz result counts exceed the session question count.' });
        return;
    }

    const result = await query(
        connection,
        `UPDATE quiz_sessions
         SET score = ?, answered_questions = ?, correct_answers = ?, duration_seconds = ?,
             time_remaining_seconds = ?, status = ?, ended_at = CURRENT_TIMESTAMP
         WHERE id = ? AND status = 'in_progress'`,
        [
            body.score,
            body.answeredQuestions,
            body.correctAnswers,
            body.durationSeconds,
            body.timeRemainingSeconds,
            body.status,
            id
        ]
    );
    if (result.affectedRows !== 1) {
        sendJson(response, 409, { error: 'Quiz session has already been completed.' });
        return;
    }
    sendJson(response, 200, { saved: true });
}

async function handleStats(request, response, connection) {
    if (request.method !== 'GET') {
        sendJson(response, 405, { error: 'Method not allowed.' });
        return;
    }
    const rows = await query(
        connection,
        'SELECT attempted_quiz_count FROM quiz_app_stats WHERE id = 1'
    );
    sendJson(response, 200, { attemptedQuizCount: Number(rows[0].attempted_quiz_count) });
}

async function handleStartAttempt(request, response, connection) {
    if (request.method !== 'POST') {
        sendJson(response, 405, { error: 'Method not allowed.' });
        return;
    }
    await query(
        connection,
        'UPDATE quiz_app_stats SET attempted_quiz_count = attempted_quiz_count + 1 WHERE id = 1'
    );
    const rows = await query(
        connection,
        'SELECT attempted_quiz_count FROM quiz_app_stats WHERE id = 1'
    );
    sendJson(response, 200, { attemptedQuizCount: Number(rows[0].attempted_quiz_count) });
}

async function handleRecentSessions(request, response, connection) {
    if (request.method !== 'GET') {
        sendJson(response, 405, { error: 'Method not allowed.' });
        return;
    }

    const url = new URL(request.url, 'http://localhost');
    const limit = Number(url.searchParams.get('limit') || 5);
    if (!Number.isInteger(limit) || limit < 1 || limit > 20) {
        sendJson(response, 400, { error: 'Limit must be between 1 and 20.' });
        return;
    }

    const sessions = await query(
        connection,
        `SELECT player_name, difficulty, score, total_questions, answered_questions,
                time_budget_minutes, ended_at
         FROM quiz_sessions
         WHERE status IN ('completed', 'time_up')
         ORDER BY score DESC, ended_at DESC
         LIMIT ?`,
        [limit]
    );
    sendJson(response, 200, sessions);
}

function serveFile(request, response, pathname) {
    if (request.method !== 'GET') {
        response.writeHead(405);
        response.end('Method not allowed.');
        return;
    }

    let fileName;
    try {
        fileName = pathname === '/' || pathname === '/index.html'
            ? 'quiz.html'
            : decodeURIComponent(pathname).replace(/^\/+/, '');
    } catch (error) {
        response.writeHead(400);
        response.end('Invalid URL.');
        return;
    }

    if (!PUBLIC_FILES.has(fileName)) {
        response.writeHead(404);
        response.end('Not found.');
        return;
    }

    const filePath = path.join(ROOT, fileName);
    fs.readFile(filePath, (error, contents) => {
        if (error) {
            response.writeHead(500);
            response.end('Unable to read the requested file.');
            return;
        }
        response.writeHead(200, {
            'Content-Type': MIME_TYPES[path.extname(filePath)] || 'application/octet-stream'
        });
        response.end(contents);
    });
}

function createServer(connection) {
    return http.createServer((request, response) => {
        let pathname;
        try {
            pathname = new URL(request.url, 'http://localhost').pathname;
        } catch (error) {
            sendJson(response, 400, { error: 'Invalid URL.' });
            return;
        }

        let handler;
        if (pathname === '/api/questions') {
            handler = () => handleQuestions(request, response, connection);
        } else if (pathname === '/api/stats') {
            handler = () => handleStats(request, response, connection);
        } else if (pathname === '/api/stats/start') {
            handler = () => handleStartAttempt(request, response, connection);
        } else if (pathname === '/api/sessions') {
            handler = request.method === 'POST'
                ? () => handleCreateSession(request, response, connection)
                : () => handleRecentSessions(request, response, connection);
        } else {
            const match = pathname.match(/^\/api\/sessions\/(\d+)\/complete$/);
            if (match) {
                handler = () => handleCompleteSession(request, response, connection, match[1]);
            }
        }

        if (handler) {
            handler().catch(error => {
                console.error('API request failed:', error);
                if (!response.headersSent) {
                    sendJson(response, error.statusCode || 500, {
                        error: error.statusCode ? error.message : 'Unable to process the request.'
                    });
                }
            });
            return;
        }

        serveFile(request, response, pathname);
    });
}

async function main() {
    if (!Number.isInteger(PORT) || PORT < 1 || PORT > 65535) {
        throw new Error('PORT must be a valid TCP port number.');
    }

    const connection = mysql.createConnection({
        host: process.env.MYSQL_HOST || '127.0.0.1',
        port: Number(process.env.MYSQL_PORT || 3306),
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '',
        database: process.env.MYSQL_DATABASE || 'quiz_master'
    });

    await new Promise((resolve, reject) => {
        connection.connect(error => error ? reject(error) : resolve());
    });

    try {
        await verifyQuestionTables(connection);
        await ensureSessionTable(connection);
        await ensureStatsTable(connection);
        if (process.argv.includes('--check-only')) {
            console.log('Database check complete.');
            connection.end();
            return;
        }

        const server = createServer(connection);
        server.listen(PORT, '127.0.0.1', () => {
            console.log(`Quiz Master is running at http://localhost:${PORT}`);
        });
    } catch (error) {
        connection.end();
        throw error;
    }
}

if (require.main === module) {
    main().catch(error => {
        console.error('Unable to start Quiz Master. Check the MySQL service, credentials, and quiz_master tables.');
        console.error(error.message);
        process.exitCode = 1;
    });
}

module.exports = {
    createServer,
    ensureSessionTable,
    ensureStatsTable,
    verifyQuestionTables
};
