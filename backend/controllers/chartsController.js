import {
    createChart,
    getChart,
    updateChart,
    deleteChart,
    getChartsFromChallenge
} from '../models/Charts.js';

export const createNewChart = (req, res) => {
    const { name, artist } = req.body;
    if (!name || !artist) {
        return res.status(400).json({ error: 'Missing required fields: name and artist' });
    }

    try {
        createChart(name, artist);
        res.status(201).json({ message: 'Chart created successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error, message: 'Failed to create chart' });
    }
}

export const getChart = (req, res) => {
    const { chart_id } = req.params;
    if (!chart_id) {
        return res.status(400).json({ error: 'Missing required fields: chart_id' });
    }

    try {
        const chart = getChart(chart_id);  
        res.status(200).json({ message: 'Chart fetched successfully' });
        
        return res.json(chart);
    }
    catch (error) {
        res.status(500).json({ error: error, message: 'Failed to fetch chart' });
    }
}

export const updateChart = (req, res) => {
    const { chart_id, name, artist } = req.body;
    if (!chart_id || !name || !artist) {
        return res.status(400).json({ error: 'Missing required fields: chart_id, name and artist' });
    }

    try {
        updateChart(chart_id, name, artist);
        res.status(200).json({ message: 'Chart updated successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error, message: 'Failed to update chart' });
    }
}

export const deleteChart = (req, res) => {
    const { chart_id } = req.params;
    if (!chart_id) {
        return res.status(400).json({ error: 'Missing required fields: chart_id' });
    }

    try {
        deleteChart(chart_id);
        res.status(200).json({ message: 'Chart deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error, message: 'Failed to delete chart' });
    }
}