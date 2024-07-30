import { Application } from 'express';
import helmet from 'helmet';

export const configMiddleware = (app: Application): void => {
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
