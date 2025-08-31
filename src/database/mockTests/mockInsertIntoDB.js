import db from '../database.js';
import {
    users,
    challenges,
    charts,
    challenge_charts,
    scores,
} from '../mockTests/mockData.js';

function insertUsers() {
    const insert = db.prepare(
        'INSERT OR IGNORE INTO users (discord_id, donder_id) VALUES (?, ?)'
    );

    for (let i = 0; i < users.length; i++) {
        insert.run(users[i].discord_id, users[i].donder_id);
    }

    const select = db.prepare('SELECT * FROM users');
    const rows = select.all();
    console.log('Users data: ', rows);
    return true;
}

function insertChallenges() {
    const insert = db.prepare(
        'INSERT OR IGNORE INTO challenge (name, end_time) VALUES (?, ?)'
    );

    for (let i = 0; i < challenges.length; i++) {
        insert.run(challenges[i].name, challenges[i].end_time);
    }

    const select = db.prepare('SELECT * FROM challenge');
    const rows = select.all();
    console.log('Challenges data: ', rows);
    return true;
}

function insertCharts() {
    const insert = db.prepare(
        'INSERT OR IGNORE INTO charts (name, artist) VALUES (?, ?)'
    );

    for (let i = 0; i < charts.length; i++) {
        insert.run(charts[i].name, charts[i].artist);
    }

    const select = db.prepare('SELECT * FROM charts');
    const rows = select.all();
    console.log('Charts data: ', rows);
    return true;
}

function insertChallengeCharts() {
    const insert = db.prepare(
        'INSERT OR IGNORE INTO challenge_charts (challenge_id, chart_id) VALUES (?, ?)'
    );

    for (let i = 0; i < challenge_charts.length; i++) {
        insert.run(
            challenge_charts[i].challenge_id,
            challenge_charts[i].chart_id
        );
    }

    const select = db.prepare('SELECT * FROM challenge_charts');
    const rows = select.all();
    console.log('Challenge - Charts data: ', rows);
    return true;
}

function insertScores() {
    const insert = db.prepare(
        'INSERT OR IGNORE INTO scores (challenge_id, chart_id, donder_id, score) VALUES (?, ?, ?, ?)'
    );

    for (let i = 0; i < scores.length; i++) {
        insert.run(
            scores[i].challenge_id,
            scores[i].chart_id,
            scores[i].donder_id,
            scores[i].score
        );
    }

    const select = db.prepare('SELECT * FROM scores');
    const rows = select.all();
    console.log('Scores data: ', rows);
    return true;
}

function insertAll() {
    insertUsers();
    insertChallenges();
    insertCharts();
    insertChallengeCharts();
    insertScores();
    
    console.log('All mock data inserted');
    return true;
}

insertAll();