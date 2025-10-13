import db from '../config/database.js';

export function createScore(challengeID, chartID, userID, score) {
    const result = db.prepare(`INSERT INTO scores (challenge_id, chart_id, user_id, score, goods, oks, bads, roll, max_combo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`).run(challengeID, chartID, userID, score);
    console.log('Successfully created score:', result);
}

export function getScores(challengeID, chartID) {
    const result = db.prepare(`SELECT u.*, s.* FROM charts c NATURAL JOIN challenge_charts cc NATURAL JOIN scores s NATURAL JOIN users u
                           WHERE cc.challenge_id=? AND cc.chart_id=?
                           ORDER BY s.score DESC
        `).all(challengeID, chartID);
    console.log('Successfully fetched scores:', result);

    return result;
}

export function updateScore(challengeID, chartID, userID, score, goods, oks, bads, roll, max_combo) {
    const result = db.prepare(`UPDATE scores SET score=?, goods=?, oks=?, bads=?, roll=?, max_combo=? WHERE challenge_id=? AND chart_id=? AND user_id=?`)
                        .run(score, goods, oks, bads, roll, max_combo, challengeID, chartID, userID);
    console.log('Successfully updated score:', result);
}

export function deleteScore(challengeID, chartID, userID) {
    const result = db.prepare(`DELETE FROM scores WHERE challenge_id=? AND chart_id=? AND user_id=?`).run(challengeID, chartID, userID);
    console.log('Successfully deleted score:', result);
}

export function getUserScore(challengeID, chartID, userID) {
    const result = db.prepare(`SELECT score FROM scores WHERE challenge_id=? AND chart_id=? AND user_id=?`).get(challengeID, chartID, userID);
    console.log('Successfully fetched user score:', result);

    return result ? result['score'] : null;
}