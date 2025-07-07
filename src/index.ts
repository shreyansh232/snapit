import { drizzle } from "drizzle-orm/neon-http";

if (!process.env.DATABASE_URL) {
  throw Error("Database URL is missing");
}

export const db = drizzle(process.env.DATABASE_URL);
