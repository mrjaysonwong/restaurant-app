import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

// Only load .env.local if we are running locally
if (process.env.NODE_ENV !== 'production') {
  config({ path: '.env.local' });
}

// Throws a clear error if the environment variable is completely missing
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is missing!');
}

const client = postgres(process.env.DATABASE_URL, { prepare: false });

export const db = drizzle({ client });