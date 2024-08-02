import { MiddlewareHandler } from '@/types';
import { validationResult } from 'express-validator';

export const validate: MiddlewareHandler = (req, res, next) => {

    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    next();
};
