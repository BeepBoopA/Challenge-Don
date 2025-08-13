import db from '../database';

function printAllUsers() {
    const users = db.prepare('SELECT * FROM users').all();
    console.log('Users:', users);
}

function printAllChallenges() {
    const challenges = db.prepare('SELECT * FROM challenge').all();
    console.log('Challenges:', challenges);
}

function printAllCharts() {
    const charts = db.prepare('SELECT * FROM chart').all();
    console.log('Charts:', charts);
}

function printAllChallengeCharts() {
    const challengeCharts = db.prepare('SELECT * FROM challenge_charts').all();
    console.log('Challenge Charts:', challengeCharts);
}

function printAllScores() {
    const scores = db.prepare('SELECT * FROM scores').all();
    console.log('Scores:', scores);
}