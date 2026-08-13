import type { Request, Response, NextFunction } from 'express';
import { userSchema } from '../schemas/user.schema.js';

export const validateUser = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const result = userSchema.safeParse(req.body);

  if (!result.success) {
     res.status(400).json({
      status: 'error',
      message: 'Validation failed.',
      errors: result.error.issues.map((issue) => ({
        field: issue.path.join('.'),
        message: issue.message,
      })),
      timestamp: new Date().toISOString(),
    });
    return
  }

  req.body = result.data;

  next();
};