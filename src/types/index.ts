import { NextFunction, Request, Response } from 'express';
import { ValidationChain } from 'express-validator';
import { ErrorMessage, FieldMessageFactory } from 'express-validator/lib/base';

export type RequestHandler<B = any, Q = any> = (req: Request<{}, {}, B, Q>, res: Response) => any;

export type MiddlewareHandler = (req: Request, res: Response, next: NextFunction) => void;

export type Validator = (fields?: string | string[] | undefined, message?: FieldMessageFactory | ErrorMessage | undefined) => ValidationChain;
