import db from '../database.js';

export function createUser(discordID, donderID) {
    db.prepare(`INSERT INTO users (discord_id, donder_id) VALUES (?, ?)`).run(discordID, donderID);
}

export function createScore(challengeID, chartID, donderID, score) {
    db.prepare(`INSERT INTO scores (challenge_id, chart_id, donder_id, score) VALUES (?, ?, ?, ?)`).run(challengeID, chartID, donderID, score);
}

export function createChallenge(name, endTime=null) {
    db.prepare(`INSERT INTO challenge (name, end_time) VALUES (?, ?)`).run(name, endTime);
}

export function createChart(name, artist) {
    db.prepare(`INSERT INTO chart (name, artist) VALUES (?, ?)`).run(name, artist);
}

export function createChallengeChart(challengeID, chartID) {
    db.prepare(`INSERT INTO challenge_charts (challenge_id, chart_id) VALUES (?, ?)`).run(challengeID, chartID);
}

export function printAllUsers() {
    const users = db.prepare('SELECT * FROM users').all();
    console.log('Users:', users);
}

export function printAllChallenges() {
    const challenges = db.prepare('SELECT * FROM challenge').all();
    console.log('Challenges:', challenges);
}

export function printAllCharts() {
    const charts = db.prepare('SELECT * FROM chart').all();
    console.log('Charts:', charts);
}

export function printAllChallengeCharts() {
    const challengeCharts = db.prepare('SELECT * FROM challenge_charts').all();
    console.log('Challenge Charts:', challengeCharts);
}

export function printAllScores() {
    const scores = db.prepare('SELECT * FROM scores').all();
    console.log('Scores:', scores);
}

export function createUser(discordID, donderID) {
    db.prepare(`INSERT INTO users (discord_id, donder_id) VALUES (?, ?)`).run(discordID, donderID);
}

export function createScore(challengeID, chartID, donderID, score) {
    db.prepare(`INSERT INTO scores (challenge_id, chart_id, donder_id, score) VALUES (?, ?, ?, ?)`).run(challengeID, chartID, donderID, score);
}

export function createChallenge(name, endTime=null) {
    db.prepare(`INSERT INTO challenge (name, end_time) VALUES (?, ?)`).run(name, endTime);
}

export function createChart(name, artist) {
    db.prepare(`INSERT INTO chart (name, artist) VALUES (?, ?)`).run(name, artist);
}
