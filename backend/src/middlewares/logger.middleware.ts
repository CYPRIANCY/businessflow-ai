import type { Request, Response, NextFunction } from 'express';

export const loggerMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const timestamp = new Date().toISOString();
  const method = req.method;
 //   const url = req.url;
  const url = req.originalUrl;

  // Print the incoming request details directly to the server terminal
  console.log(`[${timestamp}] 🚀 Incoming Request: ${method} ${url}`);

  // CRITICAL: Tell Express to move to the next middleware or controller in line
  next();
};
