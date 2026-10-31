import type { posts } from '@/db/schema';

export type Post = typeof posts.$inferSelect;
