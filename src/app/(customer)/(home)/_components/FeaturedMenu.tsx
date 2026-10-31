'use client';
import Image from 'next/image';
import {
  Box,
  Button,
  Container,
  Group,
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
            gap="sm"
            wrap="nowrap"
            align="stretch"
            miw="100%"
            px="md"
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
                  <Box pos="relative" h={{ base: 180, sm: 210 }} w="100%">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 210px, 210px"
                      priority={false}
                      style={{
                        objectFit: 'contain',
                      }}
                    />
                  </Box>

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
