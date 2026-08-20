import type { Request, Response, NextFunction } from 'express';

/**
 * Centralized error-handling middleware.
 * Express recognizes this as an error handler because it has exactly four parameters.
 */
export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  // Although next is not explicitly called inside, it must be present in the signature
  next: NextFunction
): void => {
  const timestamp = new Date().toISOString();

  // 1. Log the full internal error stack on the server terminal for debugging
  console.error(`[${timestamp}] ❌ Error captured at ${req.method} ${req.url}`);
  console.error(err);

  // 2. Respond to the client with a generic, safe HTTP 500 status code
  // This shields sensitive database credentials and stack traces from malicious users
  res.status(500).json({
    success: false,
    status: 'error',
    message: 'Something went wrong internally. Please try again later.',
    timestamp,
  });
};
