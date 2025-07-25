import db from '../database.js'

export function getCharts(challengeID) {
    return db.prepare(`SELECT c.* FROM charts c NATURAL JOIN challenge_charts cc
                       WHERE cc.challenge_id=${challengeID}`).all();
}

export function getScores(challengeID, chart) {
    return db.prepare(`SELECT u.guild_id, s.score FROM charts c NATURAL JOIN challenge_charts cc NATURAL JOIN scores s NATURAL JOIN users u
                       WHERE cc.challenge_id=${challengeID} AND cc.chart_id=${chart['chart_id']}
                       ORDER BY s.score DESC
    `).all();
}

export function getUserPlacement(challengeID, chart, userID) {
    const scores = getScores(challengeID, chart);
    const userScore = scores.map((u, index) => ({...u, index}))
                            .find((u) => u.guild_id === userID);
                                
    if (!userScore) {
        return { guild_id: userID, score: 0, index: 'last' };
    }

    // This SHOULD return { guild_id, score, index }
     // please dont break :pray:
    return userScore;
}