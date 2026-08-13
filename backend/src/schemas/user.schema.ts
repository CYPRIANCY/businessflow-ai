import { z } from 'zod';

export const userSchema = z.object({
  name: z
    .string()          // Requirement 1: Must be a primitive string
    .trim()            // Requirement 4: Strip leading and trailing whitespace first
    .min(2)            // Requirement 2: Enforce a minimum length of 2 characters
    .max(50),          // Requirement 3: Enforce a maximum length of 50 characters

    email: z
    .string()           // 1. Must be a primitive string
    .email()            // 2. Must adhere to a strict, valid email structure (e.g., user@example.com)
    .toLowerCase(),    // 3. Automatically convert all uppercase inputs to lowercase for database consistency

    age: z
    .number()           // 1. Must be a primitive number
    .int()              // 2. Must be an integer (rejects decimals like 25.5)
    .min(18)            // 3. Must be at least 18 years old
    .max(120),          // 4. Must be a realistic maximum age
});
