import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const note = sqliteTable('note', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
});

export type Note = typeof note.$inferSelect;
