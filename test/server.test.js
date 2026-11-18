const assert = require('node:assert/strict');
const test = require('node:test');
const {
    createServer,
    ensureSessionTable,
    ensureStatsTable,
    verifyQuestionTables
} = require('../server');

test('database verification checks all 12 existing division tables', async () => {
    const databaseNames = [];
    const connection = {
        query(sql, values, callback) {
            if (typeof values === 'function') {
                callback = values;
            }
            if (sql.includes('SELECT COUNT(*)')) {
                databaseNames.push(sql.match(/FROM `([^`]+)`/)[1]);
                assert.match(sql, /WHERE is_active = 1/);
                callback(null, [{ count: 60 }]);
                return;
            }
            callback(new Error(`Unexpected SQL: ${sql}`));
        }
    };
    const originalLog = console.log;
    console.log = () => {};
    let total;
    try {
        total = await verifyQuestionTables(connection);
    } finally {
        console.log = originalLog;
    }

    assert.deepEqual(databaseNames.sort(), [
        'easy_general', 'medium_general', 'hard_general',
        'easy_science', 'medium_science', 'hard_science',
        'easy_history', 'medium_history', 'hard_history',
        'easy_geography', 'medium_geography', 'hard_geography'
    ].sort());
    assert.equal(total, 720);
});

test('session table stores player, score, timing, and date fields', async () => {
    let schema = '';
    const columns = [
        'id', 'player_name', 'category', 'difficulty', 'question_type', 'status',
        'score', 'total_questions', 'answered_questions', 'time_budget_minutes',
        'correct_answers', 'duration_seconds', 'time_remaining_seconds', 'started_at', 'ended_at'
    ].map(Field => ({ Field, Type: Field === 'status' ? "enum('quit')" : 'int' }));
    await ensureSessionTable({
        query(sql, values, callback) {
            if (sql.includes('CREATE TABLE')) {
                schema = sql;
                callback(null, []);
                return;
            }
            callback(null, columns);
        }
    });
    for (const column of [
        'player_name', 'category', 'difficulty', 'question_type', 'status',
        'score', 'total_questions', 'answered_questions', 'time_budget_minutes',
        'correct_answers', 'duration_seconds', 'time_remaining_seconds', 'started_at', 'ended_at'
    ]) {
        assert.match(schema, new RegExp(column));
    }
});

test('session table migrates old schemas for partial quits and time budgets', async () => {
    const statements = [];
    await ensureSessionTable({
        query(sql, values, callback) {
            statements.push(sql);
            if (sql === 'SHOW COLUMNS FROM quiz_sessions') {
                callback(null, [
                    { Field: 'total_questions', Type: 'smallint unsigned' },
                    { Field: 'status', Type: "enum('in_progress','completed','time_up','abandoned')" }
                ]);
                return;
            }
            callback(null, []);
        }
    });

    assert.ok(statements.some(sql => sql.includes('ADD COLUMN answered_questions')));
    assert.ok(statements.some(sql => sql.includes('ADD COLUMN time_budget_minutes')));
    assert.ok(statements.some(sql => sql.includes("ENUM('in_progress', 'completed', 'time_up', 'abandoned', 'quit')")));
});

test('attempt counter table is initialized once', async () => {
    const statements = [];
    await ensureStatsTable({
        query(sql, values, callback) {
            statements.push(sql);
            callback(null, []);
        }
    });
    assert.match(statements[0], /CREATE TABLE IF NOT EXISTS quiz_app_stats/);
    assert.match(statements[1], /INSERT IGNORE INTO quiz_app_stats/);
});

test('HTTP server serves the quiz and shuffles questions across tables', async t => {
    const tablesQueried = [];
    const connection = {
        query(sql, values, callback) {
            assert.match(sql, /WHERE is_active = 1/);
            const table = sql.match(/FROM `([^`]+)`/)[1];
            tablesQueried.push(table);
            callback(null, Array.from({ length: 2 }, (_, index) => ({
                type: 'multiple',
                question: `${table} question ${index}`,
                options: '["A","B"]',
                answer: 'A',
                explanation: null,
                time_limit: 15,
                points: 10
            })));
        }
    };
    const server = createServer(connection);
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    t.after(() => new Promise((resolve, reject) => {
        server.close(error => error ? reject(error) : resolve());
    }));

    const baseUrl = `http://127.0.0.1:${server.address().port}`;
    const page = await fetch(`${baseUrl}/`);
    assert.equal(page.status, 200);
    assert.match(await page.text(), /Join the quiz/);

    const response = await fetch(`${baseUrl}/api/questions?difficulty=mixed&count=8`);
    assert.equal(response.status, 200);
    const questions = await response.json();
    assert.equal(questions.length, 8);
    assert.deepEqual(questions[0].options, ['A', 'B']);
    assert.equal(new Set(tablesQueried).size, 12);

    const invalid = await fetch(`${baseUrl}/api/questions?difficulty=impossible&count=8`);
    assert.equal(invalid.status, 400);
});

test('quiz sessions can be created, completed, and listed', async t => {
    const connection = {
        query(sql, values, callback) {
            if (sql.startsWith('INSERT INTO quiz_sessions')) {
                assert.deepEqual(values, ['Alice', 'easy', 'mixed', 8, 2]);
                callback(null, { insertId: 42 });
                return;
            }
            if (sql.startsWith('SELECT total_questions')) {
                callback(null, [{ total_questions: 8 }]);
                return;
            }
            if (sql.startsWith('UPDATE quiz_sessions')) {
                assert.deepEqual(values, [20, 2, 1, 30, 0, 'quit', 42]);
                callback(null, { affectedRows: 1 });
                return;
            }
            if (sql.startsWith('UPDATE quiz_app_stats')) {
                callback(null, { affectedRows: 1 });
                return;
            }
            if (sql.startsWith('SELECT attempted_quiz_count')) {
                callback(null, [{ attempted_quiz_count: 7 }]);
                return;
            }
            if (sql.startsWith('SELECT player_name')) {
                callback(null, [{
                    player_name: 'Alice',
                    difficulty: 'easy',
                    score: 20,
                    total_questions: 8,
                    answered_questions: 2,
                    time_budget_minutes: 2,
                    ended_at: '2026-11-18 12:00:00'
                }]);
                return;
            }
            callback(new Error(`Unexpected SQL: ${sql}`));
        }
    };
    const server = createServer(connection);
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    t.after(() => new Promise((resolve, reject) => {
        server.close(error => error ? reject(error) : resolve());
    }));

    const baseUrl = `http://127.0.0.1:${server.address().port}`;
    const created = await fetch(`${baseUrl}/api/sessions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            playerName: ' Alice ',
            difficulty: 'easy',
            questionType: 'mixed',
            totalQuestions: 8,
            timeBudgetMinutes: 2
        })
    });
    assert.equal(created.status, 201);
    assert.deepEqual(await created.json(), { sessionId: 42 });

    const completed = await fetch(`${baseUrl}/api/sessions/42/complete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            score: 20,
            answeredQuestions: 2,
            correctAnswers: 1,
            durationSeconds: 30,
            timeRemainingSeconds: 0,
            status: 'quit'
        })
    });
    assert.equal(completed.status, 200);
    assert.deepEqual(await completed.json(), { saved: true });

    const sessions = await fetch(`${baseUrl}/api/sessions?limit=5`);
    assert.equal(sessions.status, 200);
    assert.equal((await sessions.json())[0].player_name, 'Alice');

    const attempt = await fetch(`${baseUrl}/api/stats/start`, { method: 'POST' });
    assert.equal(attempt.status, 200);
    assert.deepEqual(await attempt.json(), { attemptedQuizCount: 7 });

    const stats = await fetch(`${baseUrl}/api/stats`);
    assert.deepEqual(await stats.json(), { attemptedQuizCount: 7 });
});
