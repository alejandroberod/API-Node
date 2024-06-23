import express from 'express';
import morgan from 'morgan';
import userRouter from '../routes/user.router.js';
import userStatusRouter from '../routes/userStatus.router.js';
import roleRouter from '../routes/role.router.js';
import markRouter from '../routes/mark.router.js';
import productRouter from '../routes/product.router.js'
import productImageRouter from '../routes/productImage.router.js';

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use('/api', userRouter);
app.use('/api', userStatusRouter);
app.use('/api', roleRouter);
app.use('/api', markRouter);
app.use('/api', productRouter);
app.use('/api', productImageRouter);

app.use((rep, res, nex) => {
    res.status(404).json({
        Message: 'Endpoint losses'
    });
});

export default app;