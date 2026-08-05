import app from './app.js';
import { env } from './config/env.js';

// const env.PORT = 3000;

app.listen(env.PORT, () => {
  console.log(`BusinessFlow AI server is running on port ${env.PORT}`);
});