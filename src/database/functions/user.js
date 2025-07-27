import db from '../database';

export function checkUserExists(discordID) {
    const user = db.prepare(`SELECT u.discord_id FROM users u WHERE u.discord_id=?`).all(discordID);
    
    if (user == []) { return false; }
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