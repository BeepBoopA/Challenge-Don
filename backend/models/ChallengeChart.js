import db from '../config/database.js';

export function createChallengeChart(challengeID, chartID) {
    const result = db.prepare(`INSERT INTO challenge_charts (challenge_id, chart_id) VALUES (?, ?)`).run(challengeID, chartID);
    console.log('Successfully inserted challenge chart:', result);
}

export function getChallengeCharts(challengeID) {
    const result = db.prepare(`SELECT * FROM challenge_charts WHERE challenge_id=?`).all(challengeID);
    console.log('Successfully fetched challenge charts for challengeID:', challengeID);

    return result
}

export function updateChallengeChart(challengeID, oldChartID, newChartID) {
    const result = db.prepare(`UPDATE challenge_charts SET chart_id=? WHERE challenge_id=? AND chart_id=?`).run(newChartID, challengeID, oldChartID);
    console.log('Successfully updated challenge chart:', result);
}

export function deleteChallengeChart(challengeID, chartID) {
    const result = db.prepare(`DELETE FROM challenge_charts WHERE challenge_id=? AND chart_id=?`).run(challengeID, chartID);
    console.log('Successfully deleted challenge chart:', result);
}