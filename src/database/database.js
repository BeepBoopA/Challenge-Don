import { Database } from 'better-sqlite3';

const db = new Database('../../data/data.db');

// Tables - this shit is not planned out yet god i hate er diagrams
db.exec(`
    CREATE TABLE IF NOT EXISTS users (    
        guild_id TEXT PRIMARY KEY,
        donder_id TEXT
    );

    CREATE TABLE IF NOT EXISTS challenges (

    );

    CREATE TABLE IF NOT EXISTS scores (
        
    );

    CREATE TABLE IF NOT EXISTS charts (
        
    );
`)


console.log('Database Sucessfully Ran');

export default db;