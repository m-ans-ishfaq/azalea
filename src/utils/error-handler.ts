import { Request, Response, NextFunction } from 'express';
import { logger } from './logger';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  logger.error(err);
  return res.status(500).json({
    error: true,
    message: err.message
  });
}