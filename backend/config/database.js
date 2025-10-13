import Database from 'better-sqlite3';

const db = new Database('../data.db');

// Tables - hopefully this doesnt break somehow...
db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        user_id         INTEGER PRIMARY KEY AUTOINCREMENT
        discord_id      TEXT NOT NULL UNIQUE,
        donder_id       TEXT NOT NULL UNIQUE
    );

    CREATE TABLE IF NOT EXISTS challenges (
        challenge_id    INTEGER PRIMARY KEY AUTOINCREMENT,
        name            TEXT,
        end_time        TEXT
    );

    CREATE TABLE IF NOT EXISTS charts (
        chart_id        INTEGER PRIMARY KEY, 
        name            TEXT,
        artist          TEXT
    );

    CREATE TABLE IF NOT EXISTS challenge_charts (
        challenge_id    INTEGER NOT NULL,
        chart_id        INTEGER NOT NULL,

        PRIMARY KEY (challenge_id, chart_id),
        FOREIGN KEY (challenge_id) REFERENCES challenge(challenge_id),
        FOREIGN KEY (chart_id) REFERENCES charts(chart_id)
    );

    CREATE TABLE IF NOT EXISTS scores (
        challenge_id    INTEGER NOT NULL,
        chart_id        INTEGER NOT NULL,
        user_id         TEXT NOT NULL,
        score           INTEGER,
        goods           INTEGER,
        oks             INTEGER,
        bads            INTEGER,
        roll            INTEGER,
        max_combo       INTEGER,

        PRIMARY KEY (challenge_id, chart_id, user_id),
        FOREIGN KEY (challenge_id, chart_id) REFERENCES challenge_charts(challenge_id, chart_id),
        FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
    );
`)

console.log('Database Sucessfully Ran');

export default db;