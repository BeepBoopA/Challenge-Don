import db from '../config/database.js';

export function createUser(discordID, donderID) {
    const result = db.prepare(`INSERT INTO users (discord_id, donder_id) VALUES (?, ?)`).run(discordID, donderID);
    console.log('Successfully created user:', result);
}

export function getUserByDiscordID(discordID) {
    const result = db.prepare('SELECT * FROM Users WHERE discord_id=?').get(discordID);
    console.log("Successfully fetched user by Discord ID:", result);

    return result;
}

export function getUserByDonderID(donderID) {
    const result = db.prepare('SELECT * FROM Users WHERE donder_id=?').get(donderID);
    console.log("Successfully fetched user by Donder ID:", result);

    return result;
}

export function updateUserByDiscordID(discordID) {
    const result = db.prepare('UPDATE users SET donder_id=? WHERE discord_id=?').run(discordID);
    console.log('Successfully updated user by Discord ID:', result);
}

export function deleteUserByDiscordID(discordID) {
    const result = db.prepare('DELETE FROM users WHERE discord_id=?').run(discordID);
    console.log('Successfully deleted user by Discord ID:', result);
}