import express from 'express';
import { createNewChart, getCharts, updateChart, deleteChart, getChartsFromChallenge } from '../controllers/chartController.js';

export const chartRoutes = (() => {
    const router = express.Router();

    router.post('/', createNewChart);
    router.get('/:chart_id', getCharts);
    router.put('/', updateChart);
    router.delete('/:chart_id', deleteChart);
    router.get('/:challenge_id', getChartsFromChallenge);

    return router;
});