'use client';
import {
  Box,
  Button,
  Container,
  Group,
  Image,
  ScrollArea,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import Link from 'next/link';
import { featuredMenu } from '@/data/test';
import { CaretRightIcon } from '@phosphor-icons/react';

export function FeaturedMenu() {
  return (
    <section aria-labelledby="featured-menu-heading">
      <Container py="xl">
        <Group justify="space-between" mb="lg">
          <Title id="featured-menu-heading" order={3}>
            Featured Menu
          </Title>
          <Button
            component={Link}
            href="/menu"
            variant="transparent"
            rightSection={<CaretRightIcon size={16} />}
            size="compact-sm"
            c="orange"
           
          >
            View All
          </Button>
        </Group>

        {/* negative margin lets the row bleed to the screen edge, px puts the gutter back */}
        <ScrollArea
          type="never"
          scrollbars="x"
          mx="calc(var(--mantine-spacing-md) * -1)"
        >
          <Group
            gap="xs"
            wrap="nowrap"
            align="stretch"
            miw="100%"
            px="sm"
            w="max-content"
          >
            {featuredMenu.map((item) => (
              <Link
                key={item.id}
                href={`/menu/${item.slug}`}
                style={{
                  flex: '1 0 140px',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <Stack>
                  <Image
                    h={{ base: 140, sm: 180 }}
                    w="auto"
                    fit="contain"
                    src={item.image}
                    alt={item.name}
                  />
                  <Text fw={600} ta="center" size="sm">
                    {item.name}
                  </Text>
                </Stack>
              </Link>
            ))}
          </Group>
        </ScrollArea>
      </Container>
    </section>
  );
}
