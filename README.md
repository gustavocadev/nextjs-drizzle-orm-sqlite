# Example of Next.js + Drizzle ORM + SQLITE

Steps to run the project:

1. Create a file named `.env` in the root directory and add the following environment variables:

```bash
DB_URL='notes.sqlite'
```

2. Run `pnpm install` command to install dependencies
3. Run `pnpm run db:push` command to create the database and tables
4. Run `pnpm run dev` command to start the development server
