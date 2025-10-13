import {
    createChallenge, 
    getChallenge,
    updateChallenge,
    deleteChallenge,
    getLatestChallenge
} from '../models/Challenge.js';

export const createNewChallenge = (req, res) => {
    const { name, end_time } = req.body;
    if (!name || !end_time) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    
    try {
        createChallenge(name, end_time);
        res.status(201).json({ message: 'Challenge created successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message, message: 'Failed to create challenge' });
    } 
}

export const getChallenge = (req, res) => {
    const { challengeA_id } = req.params;
    if (!challengeA_id) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    
    try {
        const challenge = getChallenge(challengeA_id);
        res.json(challenge)    
    }
    catch (error) {
        res.status(500).json({ error: error.message, message: 'Failed to fetch challenge' });
    }
}

export const updateChallenge = (req, res) => {
    const { challenge_id, name, end_time } = req.body;
    if (!challenge_id || !name || !end_time) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        updateChallenge(challenge_id, name, end_time);
        res.status(200).json({ message: 'Challenge updated successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message, message: 'Failed to update challenge' });
    }
}

export const deleteChallenge = (req, res) => {
    const { challenge_id } = req.params;
    if (!challenge_id) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        deleteChallenge(challenge_id);
        res.status(200).json({ message: 'Challenge deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message, message: 'Failed to delete challenge' });
    }
}

export const getLatestChallengeID = (req, res) => {
    try {
        const latestChallengeID = getLatestChallenge();
        res.json({ challenge_id: latestChallengeID });
    }
    catch (error) {
        res.status(500).json({ error: error.message, message: 'Failed to fetch latest challenge ID' });
    }
}