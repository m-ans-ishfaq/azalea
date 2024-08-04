import { Application, json } from 'express';
import helmet from 'helmet';
import { morganMiddleware } from './morgan';

export const configMiddleware = (app: Application): void => {
    app.use(json());

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
