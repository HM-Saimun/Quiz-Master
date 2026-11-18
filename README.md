# Quiz Master

## Run locally

1. Start MySQL in XAMPP and ensure the `quiz_master` database has the 12 category/difficulty tables.
2. Set `MYSQL_HOST`, `MYSQL_PORT`, `MYSQL_USER`, `MYSQL_PASSWORD`, and optionally `MYSQL_DATABASE` if your local MySQL settings differ from `127.0.0.1:3306`, `root`, an empty password, and `quiz_master`.
3. Run `npm run db:check` to verify the question tables and create or migrate the session and attempt-counter tables, or run `npm start` to do that and start the app.
4. Open [http://localhost:5000](http://localhost:5000).

Questions are read directly from their matching table in `quiz_master` (for example, `easy_general`); the question data is no longer bundled in the app source. Players can choose easy, medium, hard, or mixed difficulty and a 2, 5, 10, 15, 20, or 30 minute budget. Questions are shuffled across the tables for the selected difficulty, with 15 seconds budgeted per question.

Players enter a name after clicking Start. The landing-page attempt count increments on each Start click, including when a player later cancels the name prompt. Quiz sessions are stored in `quiz_sessions`, including player, settings, score, questions answered, duration, remaining time, status, and start/end timestamps. Quitting prompts for confirmation and saves the partial result.
