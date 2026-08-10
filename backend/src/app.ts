import express from 'express';
import healthRoutes from './routes/health.routes.js';
import { loggerMiddleware } from './middlewares/logger.middleware.js';

const app = express();

app.use(loggerMiddleware)

app.use(express.json());

app.use('/health', healthRoutes);

export default app;
