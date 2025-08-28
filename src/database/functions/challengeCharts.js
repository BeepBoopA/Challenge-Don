import db from '../database.js'
import { printAllChallengeCharts, printAllChallenges, printAllUsers } from './crudDatabase.js';

export function getCharts(challengeID) {
    return db.prepare(`SELECT c.* FROM charts c NATURAL JOIN challenge_charts cc
                       WHERE cc.challenge_id=?`).all(challengeID);
}

export function getScores(challengeID, chart) {
    return db.prepare(`SELECT u.discord_id, s.score FROM charts c NATURAL JOIN challenge_charts cc NATURAL JOIN scores s NATURAL JOIN users u
                       WHERE cc.challenge_id=? AND cc.chart_id=?
                       ORDER BY s.score DESC
    `).all(challengeID, chart['chart_id']);
}

export function getUserPlacement(challengeID, chart, userID) {
    const scores = getScores(challengeID, chart);
    const userScore = scores.map((u, index) => ({...u, index}))
                            .find((u) => u.discord_id === userID);
                                
    if (!userScore) {
        return { discord_id: userID, score: 0, index: 'last' };
    }

    // This SHOULD return { discord_id, score, index }
     // please dont break :pray:
    return userScore;
}

export function getLatestChallenge() {
    const result = db.prepare(`SELECT challenge_id FROM challenge ORDER BY challenge_id DESC LIMIT 1`).get();
    console.log(result)
    return parseInt(result['challenge_id']);
}

export function getScoreLeader(challengeID, chart) {
    const scores = getScores(challengeID, chart).map((u) => u.score);
    return scores[0] ?? 'No score';
}