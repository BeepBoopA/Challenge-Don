import db from '../config/database.js';

export function createChallenge(name, endTime) {
    const result = db.prepare(`INSERT INTO challenge (name, end_time) VALUES (?, ?)`).run(name, endTime);
    console.log('Successfully created challenge:', result);
}

export function getChallenge(challengeID) {
    return db.prepare(`SELECT * FROM challenge WHERE challenge_id=?`).get(challengeID);
}

export function updateChallenge(challengeID, name, endTime) {
    const result = db.prepare(`UPDATE challenge SET name=?, end_time=? WHERE challenge_id=?`).run(name, endTime, challengeID);
    console.log('Successfully updated challenge:', result);
}

export function deleteChallenge(challengeID) {
    const result = db.prepare(`DELETE FROM challenge WHERE challenge_id=?`).run(challengeID);
    console.log('Successfully deleted challenge:', result);
}

export function getLatestChallenge() {
    const result = db.prepare(`SELECT challenge_id FROM challenge ORDER BY challenge_id DESC LIMIT 1`).get();
    console.log(result)

    return parseInt(result['challenge_id']);
}