import db from '../database.js';

export function checkUserExists(discordID) {
    const user = db.prepare(`SELECT * FROM users WHERE discord_id=?`).all(discordID);
    
    if (user.length === 0) { return false; }
    return true;
}

export function setDiscordDonder(discordID, donderID) {
    const insert = db.prepare(`INSERT INTO users (discord_id, donder_id) VALUES (?, ?)`);
    insert.run(discordID, donderID);
}

export function deleteDiscordDonder(discordID) {
    const remove = db.prepare(`DELETE FROM users WHERE discord_id=?`);
    remove.run(discordID);
}