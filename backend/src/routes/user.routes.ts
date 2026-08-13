import { Router } from 'express';
import { validateUser } from '../middlewares/validate.middleware.js';

const router = Router();

router.post('/', validateUser, (req, res) => {
  res.status(201).json({
    message: 'User data is valid.',
    data: req.body,
  });
});

export default router;