import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
// app.use('/users', userRoutes());

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000');
})