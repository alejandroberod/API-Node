import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRouter from '../routes/user.router.js';
import userStatusRouter from '../routes/userStatus.router.js';
import roleRouter from '../routes/role.router.js';
import userStatisticRouter from '../routes/userStatistic.router.js';
import gameHistoryRouter from '../routes/gameHistory.router.js';
import gameRouter from '../routes/game.router.js';

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors())

app.use('/apiGame', userRouter);
app.use('/apiGame', userStatusRouter);
app.use('/apiGame', roleRouter);
app.use('/apiGame', userStatisticRouter);
app.use('/apiGame', gameHistoryRouter);
app.use('/apiGame', gameRouter);

app.use((rep, res, nex) => {
    res.status(404).json({
        Message: 'Endpoint losses'
    });
});

export default app;