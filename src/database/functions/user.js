import db from '../database';

export function checkUserExists(discordID) {
    const user = db.prepare(`SELECT u.discord_id FROM users u WHERE u.discord_id=?`).all(discordID);
    
    if (user == []) { return false; }
    return true;
}