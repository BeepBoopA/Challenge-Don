import express from 'express'; import { createNewScore, getScores, updateScore, deleteScore, getUserScore } from '../controllers/scoreController.js'; export const scoreRoutes = (() => {
    const router = express.Router();

    router.post('/', createNewScore);
    router.get('/', getScores);
    router.put('/', updateScore);
    router.delete('/', deleteScore);
    router.get('/', getUserScore);

    return router;
});