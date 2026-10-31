'use client';
import { Card, Image, Text, Button, Group, Grid } from '@mantine/core';
import type { posts } from '@/db/schema';

type Post = typeof posts.$inferSelect;

export function DataCard({ posts }: { posts: Post[] }) {
  return (
    <Grid my="2rem">
      {posts.map((p) => (
        <Grid.Col key={p.id} span={{ base: 12, sm: 6, lg: 3 }}>
          <Card shadow="sm" padding="lg" withBorder h="100%">
            <Card.Section>
              <Image
                src={`https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-${p.id}.png`}
                height={160}
                alt={`Blog post ${p.id}`}
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>{p.title}</Text>
            </Group>

            <Text size="sm" c="dimmed" style={{ flexGrow: 1 }}>
              {p.content}
            </Text>

            <Button color="blue" fullWidth mt="md">
              Read More
            </Button>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
}
