import { Application, json } from 'express';
import helmet from 'helmet';
import { morganMiddleware } from './morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';

export const configMiddleware = (app: Application): void => {
    app.use(json());
    app.use(cookieParser(process.env.COOKIE_SECRET));
    app.use(session({
        secret: process.env.SESSION_SECRET!,
        resave: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            signed: true,
        },
        store: MongoStore.create({
            mongoUrl: process.env.DATABASE_URI
        })
    }));
    app.use(session({
        secret: process.env.SESSION_SECRET || 'SESSION_SECRET',
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 60000 * 60 * 24,
            signed: true
        }
    }));
    app.use(morganMiddleware);

    app.use(
        helmet({
            contentSecurityPolicy: {
                directives: {
                    defaultSrc: ["'self'"],
                    scriptSrc: ["'self'", 'example.com'],
                    objectSrc: ["'none'"],
                    upgradeInsecureRequests: [],
                },
            },
            referrerPolicy: { policy: 'no-referrer' },
        }),
    );
};
