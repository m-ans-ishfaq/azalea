import { NextFunction, Request, Response } from 'express';

/**
 * Type for a basic Express request handler
 */
export type RequestHandler = (req: Request, res: Response) => void;

/**
 * Type for an Express middleware handler
 */
export type MiddlewareHandler = (req: Request, res: Response, next: NextFunction) => void;