import express from 'express';

export const challengeRoutes = (() => {
    const router = express.Router();

    router.get('/', getChallenges);
    router.post('/', createChallenge);
    router.put('/:id', updateChallenge);
    router.delete('/:id', deleteChallenge);

    return router;
});