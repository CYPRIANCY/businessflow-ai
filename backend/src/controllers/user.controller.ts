import type { Request, Response } from 'express';

export const createUser = (req: Request, res: Response): void => {
  res.status(201).json({
    message: 'User data is valid.',
    data: req.body,
  });
};