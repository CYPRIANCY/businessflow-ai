import type { Request, Response } from 'express';
import { createUserService } from '../services/user.service.js';
import { catchAsync } from '../utils/catchAsync.js';

export const createUser = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    console.log('📬 Controller layer: Received user registration request.');

    const registeredUser = await createUserService(req.body);

    res.status(201).json({
      success: true,
      message: 'User created successfully.',
      data: registeredUser,
    });
  }
);