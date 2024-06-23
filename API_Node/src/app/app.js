import express from 'express';
import morgan from 'morgan';
import userRouter from '../routes/user.router.js';
import userStatusRouter from '../routes/userStatus.router.js';
import roleRouter from '../routes/role.router.js';

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use('/api/v1', userRouter);
app.use('/api/v1', userStatusRouter);
app.use('/api/v1', roleRouter);

app.use((rep, res, nex) => {
    res.status(404).json({
        Message: 'Endpoint losses'
    });
});

export default app;