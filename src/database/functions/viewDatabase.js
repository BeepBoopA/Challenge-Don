import db from '../database.js';

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