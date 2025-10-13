import {
    createScore,
    getScores,
    updateScore,
    deleteScore,
    getUserScore
} from '../models/Score.js';

export const createNewScore = (req, res) => {
    const { challenge_id, chart_id, user_id, score } = req.body;
    if (!challenge_id || !chart_id || !user_id || score === undefined) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        createScore(challenge_id, chart_id, user_id, score);
        res.status(201).json({ message: 'Score created successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message, message: 'Failed to create score' });
    }
}

export const getScores = (req, res) => {
    const { challenge_id, chart_id } = req.body;
    if (!challenge_id || !chart_id) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    
    try {
        const scores = getScores(challenge_id, chart_id);
        return res.json(scores);
    }
    catch (error) {
        res.status(500).json({ error: error.message, message: 'Failed to fetch scores' });
    }
}

export const updateScore = (req, res) => {
    const { challenge_id, chart_id, user_id, score } = req.body;
    if (!challenge_id || !chart_id || !user_id || score === undefined) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        updateScore(challenge_id, chart_id, user_id, score);
        res.status(200).json({ message: 'Score updated successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message, message: 'Failed to update score' });
    }
}

export const deleteScore = (req, res) => {
    const { challenge_id, chart_id, user_id } = req.body;
    if (!challenge_id || !chart_id || !user_id) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        deleteScore(challenge_id, chart_id, user_id);
        res.status(200).json({ message: 'Score deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message, message: 'Failed to delete score' });
    }
}

export const getUserScore = (req, res) => {
    const { challenge_id, chart_id, user_id } = req.body;
    if (!challenge_id || !chart_id || !user_id) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const score = getUserScore(challenge_id, chart_id, user_id);
        return res.json(score);
    }
    catch (error) {
        res.status(500).json({ error: error.message, message: 'Failed to fetch score' });
    }
}