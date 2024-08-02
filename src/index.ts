import 'module-alias/register';
import express from 'express';
import { configMiddleware } from '@/middlewares';
import { connectToDatabase } from '@/utils/db-connection';
import { config as envConfig } from 'dotenv';
import { configRoutes } from './routes/index.routes';
import { logger } from './utils/logger';

envConfig();

const app = express();
const PORT = process.env.PORT || 3000;

configMiddleware(app);
configRoutes(app);

app.get('/', (req, res) => {
    res.send('Hello Azalea!');
});

connectToDatabase();
app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});

export { app };