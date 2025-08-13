import Database from 'better-sqlite3';

const db = new Database('data/data.db');

// Tables - hopefully this doesnt break somehow...
db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        discord_id      TEXT PRIMARY KEY,
        donder_id       TEXT NOT NULL UNIQUE
    );

    CREATE TABLE IF NOT EXISTS challenge (
        challenge_id    INTEGER PRIMARY KEY AUTOINCREMENT,
        name            TEXT,
        end_time        TEXT
    );

    CREATE TABLE IF NOT EXISTS charts (
        chart_id        INTEGER PRIMARY KEY AUTOINCREMENT,
        name            TEXT,
        artist          TEXT
    );

    CREATE TABLE IF NOT EXISTS challenge_charts (
        challenge_id    INTEGER NOT NULL,
        chart_id        INTEGER NOT NULL,

        PRIMARY KEY (challenge_id, chart_id),
        FOREIGN KEY (challenge_id) REFERENCES challenges(challenge_id),
        FOREIGN KEY (chart_id) REFERENCES charts(chart_id)
    );

    CREATE TABLE IF NOT EXISTS scores (
        challenge_id    INTEGER NOT NULL,
        chart_id        INTEGER NOT NULL,
        donder_id       TEXT NOT NULL,
        score           INTEGER,

        PRIMARY KEY (challenge_id, chart_id, donder_id),
        FOREIGN KEY (challenge_id, chart_id) REFERENCES challenge_charts(challenge_id, chart_id),
        FOREIGN KEY (donder_id) REFERENCES users(donder_id) ON DELETE CASCADE
    );
`)

console.log('Database Sucessfully Ran');

export default db;