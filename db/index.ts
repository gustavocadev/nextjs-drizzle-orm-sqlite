import { drizzle, BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';

const sqlite = new Database(process.env.DB_URL!);
export const db: BetterSQLite3Database = drizzle(sqlite);

// this is important to bring the schema into the database, otherwise the tables won't be created
migrate(db, { migrationsFolder: 'drizzle' });
