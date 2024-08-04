// middleware/validate.ts
import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

export const validate = (type: 'body' | 'query', schema: ZodSchema<any>) => (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse(type === 'body' ? req.body : req.query);
    next();
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: error,
    });
  }
};