import { db } from "./index";
import { posts } from "./schema";

const postData = [
  {
    title: "My First Post",
    content: "This is my first post.",
  },
  {
    title: "Learning Drizzle",
    content: "I am learning Drizzle ORM.",
  },
  {
    title: "Learning Next.js",
    content: "Next.js Server Components are interesting.",
  },
  {
    title: "PostgreSQL Basics",
    content: "PostgreSQL is my database.",
  },
  {
    title: "My Restaurant App",
    content: "I am building MR WONGTON.",
  },
  {
    title: "Understanding SQL",
    content: "SQL is useful for backend development.",
  },
  {
    title: "Database Relationships",
    content: "Foreign keys connect related tables.",
  },
  {
    title: "Drizzle Queries",
    content: "Drizzle provides a type-safe query builder.",
  },
  {
    title: "Supabase PostgreSQL",
    content: "Supabase provides hosted PostgreSQL.",
  },
  {
    title: "Full Stack Development",
    content: "I am learning full-stack web development.",
  },
];

async function main() {
  await db.insert(posts).values(postData);

  console.log("10 posts inserted!");
}

main();