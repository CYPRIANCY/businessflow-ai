import { Router } from 'express';
import { validateUser } from '../middlewares/validate.middleware.js';
import { createUser } from '../controllers/user.controller.js';

const router = Router();

router.post('/', validateUser, createUser);

export default router;