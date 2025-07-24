import db from '../database.js'

export function getCharts(challengeID) {
    return db.prepare(`SELECT c.* FROM charts c NATURAL JOIN challenge_charts cc
                       WHERE cc.challenge_id=${challengeID}`).all();
}

export function getUserScores(challengeID, chart) {
    return db.prepare(`SELECT u.guild_id, s.score FROM charts c NATURAL JOIN challenge_charts cc NATURAL JOIN scores s NATURAL JOIN users u
                       WHERE cc.challenge_id=${challengeID} AND cc.chart_id=${chart['chart_id']}
                       ORDER BY s.score DESC
    `).all();
}

export function getUserPlacement(challengeID, chart) {
    const scores = this.getUserScores(challengeID, chart);
    const userScore = scores.map((u, index) => ({...u, index}))
                            .find((u) => this.userID === guild_id);
                                
    if (userScore === null || userScore === undefined) {
        return { guild_id: this.userID, score: 0, index: 'last' };
    }

    // This SHOULD return { guild_id, score, index }
     // please dont break :pray:
    return userScore;
}