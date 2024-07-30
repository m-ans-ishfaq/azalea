import express from 'express';
import { configMiddleware } from './middlewares';

const app = express();
const PORT = process.env.PORT || 3000;

configMiddleware(app);

app.get('/', (req, res) => {
    res.send('Hello Azalea!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export { app };
