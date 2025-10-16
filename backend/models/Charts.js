import db from '../config/database.js';

export function createChart(name, artist) {
    const result = db.prepare(`INSERT INTO charts (name, artist) VALUES (?, ?)`).run(name, artist);
    console.log('Successfully inserted chart:', result);
}

export function getChart(chartID) {
    const result = db.prepare(`SELECT * FROM charts WHERE chart_id=?`).get(chartID);
    console.log('Successfully fetched chart for chartID:', chartID);

    return result;
}

export function updateChart(chartID, name, artist) {
    const result = db.prepare(`UPDATE charts SET name=?, artist=? WHERE chart_id=?`).run(name, artist, chartID);
    console.log('Successfully updated chart:', result);
}

export function deleteChart(chartID) {
    const result = db.prepare(`DELETE FROM charts WHERE chart_id=?`).run(chartID);
    console.log('Successfully deleted chart:', result);
}