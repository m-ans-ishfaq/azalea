import express from 'express';
import { RequestHandler } from './types';

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * Root endpoint handler
 * 
 * @route GET /
 * @returns {void}
 */
const rootHandler: RequestHandler = (req, res) => {
    res.send('Hello Azalea!');
};

app.get('/', rootHandler);

/**
 * Start the Express server
 * 
 * @param port - The port number to listen on
 * @returns {void}
 */
const startServer = (port: number): void => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

// Start the server
startServer(PORT as number);

export { app, startServer };
