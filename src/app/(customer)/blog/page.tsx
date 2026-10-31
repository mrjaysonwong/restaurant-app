import { Suspense } from 'react';
import { db } from '@/db';
import { posts } from '@/db/schema';
import { Container, Title } from '@mantine/core';
import { BackButton } from '@/components/ui/BackButton';
import { DataTable } from '@/components/ui/DataTable';
import { DataCard } from '@/components/ui/DataCard';
import { delay } from '@/utils/delay';

async function DataTableSection() {
  await delay(1000); // fake slowness, remove later
  const allPosts = await db.select().from(posts);

  return <DataTable posts={allPosts} />;
}

async function DataCardSection() {
  await delay(3000); // fake slowness, remove later
  const allPosts = await db.select().from(posts);

  return <DataCard posts={allPosts} />;
}

export default function Blog() {
  return (
    <Container pt="6rem">
      <Title order={1}>
        Blog Page
      </Title>
      <BackButton />
      <Suspense fallback={<p>Loading Blog Post Table...</p>}>
        <DataTableSection />
      </Suspense>
      <Suspense fallback={<p>Loading Blog Post Card...</p>}>
        <DataCardSection />
      </Suspense>
    </Container>
  );
}
