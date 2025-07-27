import db from "../database/database.js";

export const createChallenge = async (challengeName, song1, song2, song3) => {
    // Insert Challenge
    let insert = null;

    insert = db.prepare("INSERT INTO challenges (name) VALUES (?)");
    const challengeID = insert.run(`${challengeName}`).lastInsertRowid;

    insert = db.prepare("INSERT INTO charts (name) VALUES (?)");
    const songIDs = [
        insert.run(song1).lastInsertRowid,
        insert.run(song2).lastInsertRowid,
        insert.run(song3).lastInsertRowid,
    ];

    insert = db.prepare(
        "INSERT INTO challenge_charts (challenge_id, chart_id) VALUES (?, ?)"
    );
    for (let i = 0; i < songIDs.length; i++) {
        insert.run(challengeID, songIDs[i]);
    }

    // Test:
    let select = null;
    let rows = null;

    select = db.prepare("SELECT * FROM challenges");
    rows = select.all();
    console.log("Challenge data: ", rows);

    select = db.prepare("SELECT * FROM charts");
    rows = select.all();
    console.log("Chart data: ", rows);

    select = db.prepare("SELECT * FROM challenge_charts");
    rows = select.all();
    console.log("Challenge - Chart data: ", rows);
};
