import { Request, Response, NextFunction } from 'express';

export const requestLogger = (req: Request, res: Response, next:NextFunction ) => {
    console.log(`Request: ${req.method} ${req.url}`);
    next();
    console.log(`Response: ${res.statusCode}`);
}