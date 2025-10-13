import express from 'express';
import { createUser, getUserByDiscordID, updateUserByDiscordID, deleteUserByDiscordID } from '../controllers/userController.js';

export const userRoutes = (() => {
    const router = express.Router();

    router.get('/:id', getUserByDiscordID);
    router.post('/', createUser);
    router.put('/:id', updateUserByDiscordID);
    router.delete('/:id', deleteUserByDiscordID);

    return router;
});