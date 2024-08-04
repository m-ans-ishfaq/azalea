import { Application } from 'express';
import users from './user.routes';
import auth from './auth.routes';

export const configRoutes = (app: Application): void => {
    app.use('/users', users);
    app.use('/auth', auth);
};
