import { NextFunction, Request, Response } from 'express';

export type RequestHandler<B = any, Q = any> = (
    req: Request<{}, {}, B, Q>,
    res: Response,
    next: NextFunction,
) => any;
