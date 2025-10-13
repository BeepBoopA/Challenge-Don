import {
    createChallengeChart,
    getChallengeCharts,
    updateChallengeChart,
    deleteChallengeChart
} from '../models/ChallengeChart.js';

export const createNewChallengeChart = (req, res) => {
    const { challenge_id, chart_id } = req.body;
    if (!challenge_id || !chart_id) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        createChallengeChart(challenge_id, chart_id);
        res.status(201).json({ message: 'Challenge chart created successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message, message: 'Failed to create challenge chart' });
    }
}

export const getChallengeCharts = (req, res) => {
    const { challenge_id } = req.params;
    if (!challenge_id) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const charts = getChallengeCharts(challenge_id);
        return res.json(charts);
    }
    catch (error) {
        res.status(500).json({ error: error.message, message: 'Failed to fetch challenge charts' });
    }
}

export const updateChallengeChart = (req, res) => {
    const { challenge_id, old_chart_id, new_chart_id } = req.body;
    if (!challenge_id || !old_chart_id || !new_chart_id) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        updateChallengeChart(challenge_id, old_chart_id, new_chart_id);
        res.status(200).json({ message: 'Challenge chart updated successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message, message: 'Failed to update challenge chart' });
    }
}

export const deleteChallengeChart = (req, res) => {
    const { challenge_id, chart_id } = req.body;
    if (!challenge_id || !chart_id) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        deleteChallengeChart(challenge_id, chart_id);
        res.status(200).json({ message: 'Challenge chart deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message, message: 'Failed to delete challenge chart' });
    }
}