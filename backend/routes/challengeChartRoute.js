import express from 'express';
import { createNewChallengeChart, getChallengeCharts, updateChallengeChart, deleteChallengeChart } from '../controllers/challengeChartsController';

export const challengeChartRoutes = (() => {
    const router = express.Router();

    router.post('/', createNewChallengeChart);
    router.get('/:challenge_id', getChallengeCharts);
    router.put('/', updateChallengeChart);
    router.delete('/', deleteChallengeChart);

    return router;
});