import type { Config } from 'drizzle-kit';
import process from 'node:process'

// Load the environment variables from the .env file
process.loadEnvFile()

// We need to make sure the in the tsconfig.json file, we need to change the target at least to 'ES6'
export default {
  schema: './db/schema/index.ts',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DB_URL!,
  },
} satisfies Config;
