import app from './app/app.js';
import dotenv from 'dotenv';
import { modelsApp } from './config/models.app.js';

dotenv.config({path: '../.env'});
modelsApp(true);
const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
    console.log(`Server running in port ${port}`);
});

