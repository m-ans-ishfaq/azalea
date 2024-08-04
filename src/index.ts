import 'module-alias/register';
import express from 'express';
import { configMiddleware } from '@/middlewares';
import { connectToDatabase } from '@/utils/db-connection';
import { config as envConfig } from 'dotenv';
import { configRoutes } from './routes/index.routes';
import { logger } from './utils/logger';
import { errorHandler } from './utils/error-handler';

envConfig();

const app = express();
const PORT = process.env.PORT || 3000;

configMiddleware(app);
configRoutes(app);
// Error Handling

app.get('/', (req, res) => {
    res.send("Hello Azalea");
});

// Error handling at last
app.use(errorHandler);

connectToDatabase();
app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});

export { app };
