import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const notes = sqliteTable('note', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
});
