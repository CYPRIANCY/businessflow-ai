import type { Request, Response } from 'express';
// Explicitly include the .js extension for node16/nodenext module resolution
import { createUserService } from '../services/user.service.js';

/**
 * Controller responsible for handling user creation web requests.
 * Notice: This does not use next() because it fulfills the request-response cycle.
 */
export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('📬 Controller layer: Received user registration request.');

    // 1. Pass the payload data directly to the asynchronous Service layer
    const registeredUser = await createUserService(req.body);

    // 2. Return HTTP 201 Created along with the structured data from the service
    res.status(201).json({
      success: true,
      message: 'User created successfully.',
      data: registeredUser,
    });
  } catch (error) {
    console.error('❌ Controller Error:', error);

    // Provide a safe fallback response if any unexpected errors occur
    res.status(500).json({
      success: false,
      message: 'Internal Server Error.',
    });
  }
};
