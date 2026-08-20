import express from 'express';
import healthRoutes from './routes/health.routes.js';
import { loggerMiddleware } from './middlewares/logger.middleware.js';
import userRoutes from './routes/user.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';

const app = express();

app.use(loggerMiddleware)

app.use(express.json());

app.use('/health', healthRoutes);
app.use('/users', userRoutes);
app.use(errorHandler);

export default app;
