import {
    getUserByDiscordID,
    createUser,
    updateUserByDiscordID,
    deleteUserByDiscordID
} from '../models/User.js';

export const getUserByDiscordID = (req, res) => {
    const discord_id = req.params.id;
    if (!discord_id) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    const users = getUserByDiscordID(discord_id);
    res.json(users);
}

export const createUser = (req, res) => {
    const { discord_id, donder_id } = req.body;
    if (!discord_id || !donder_id) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    try {
        const newUser = User.create(discord_id, donder_id);
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateUserByDiscordID = (req, res) => {
    const discord_id = req.params.id;
    const { donder_id } = req.body;
    if (!discord_id || !donder_id) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const updatedUser = updateUserByDiscordID(discord_id, donder_id);
        res.status(200).json(updatedUser);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteUserByDiscordID = (req, res) => {
    const discord_id = req.params.id;
    if (!discord_id) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    try {
        const deletedUser = deleteUserByDiscordID(discord_id);
        res.status(200).json(deletedUser);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}