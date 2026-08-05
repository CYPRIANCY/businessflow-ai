// import 'dotenv/config';
import dotenv from 'dotenv';

dotenv.config();

// 1. Read raw values from process.env
const rawPort = process.env.PORT;
const appName = process.env.APP_NAME;
const appVersion = process.env.APP_VERSION;
const nodeEnv = process.env.NODE_ENV;

// 2. Convert values to correct types
const parsedPort = Number(rawPort);

// 3. Strict validation checks
const errors: string[] = [];

if (!rawPort) {
  errors.push('PORT is missing.');
} else if (Number.isNaN(parsedPort)) {
  errors.push(`PORT must be a number (received: "${rawPort}").`);
} else if (parsedPort <= 0) {
  errors.push(`PORT must be a positive integer greater than 0 (received: ${parsedPort}).`);
}

if (!appName) {
  errors.push('APP_NAME is missing.');
}

if (!appVersion) {
  errors.push('APP_VERSION is missing.');
}

if (!nodeEnv) {
  errors.push('NODE_ENV is missing.');
}

// 4. Fail-Fast: Halt execution immediately if any validation failed
if (errors.length > 0) {
  console.error('\n❌ Environment Variable Validation Failed:');
  errors.forEach((error) => console.error(`  - ${error}`));
  console.error('\nServer shutting down immediately.\n');
  process.exit(1);
}

// 5. Define a strict TypeScript contract for the config object
interface EnvironmentConfig {
  PORT: number;
  APP_NAME: string;
  APP_VERSION: string;
  NODE_ENV: string;
}

// 6. Export the strongly-typed config object
export const env: EnvironmentConfig = {
  PORT: parsedPort,
  APP_NAME: appName as string,
  APP_VERSION: appVersion as string,
  NODE_ENV: nodeEnv as string,
};
