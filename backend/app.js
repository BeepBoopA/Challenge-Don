import express from 'express';
import cors from 'cors';
import { userRoutes } from './routes/userRoute.js';
import { challengeChartRoutes } from './routes/challengeChartRoute.js';
import { challengeRoutes } from './routes/challengeRoute.js';
import { chartRoutes } from './routes/chartRoute.js';
import { scoreRoutes } from './routes/scoreRoute.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.use('/users', userRoutes());
app.use('/challengeCharts', challengeChartRoutes());
app.use('/challenges', challengeRoutes());
app.use('/charts', chartRoutes());
app.use('/scores', scoreRoutes());

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000');
})