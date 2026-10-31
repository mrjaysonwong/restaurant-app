'use client';
import Link from 'next/link';
import {
  Container,
  Box,
  Title,
  SimpleGrid,
  Group,
  Image,
  Text,
  Button,
  Anchor,
  Stack,
  Flex,
} from '@mantine/core';
import classes from './AboutUs.module.css';
import { CaretRightIcon } from '@phosphor-icons/react';

export function AboutUs() {
  return (
    <section aria-labelledby="about-us-heading" className={classes.about}>
      <Container pos="relative" py={50}>
        <Title id="about-us-heading" order={3} mb="sm">
          About Us
        </Title>
        <Flex
          direction={{ base: 'column', md: 'row-reverse' }}
          gap="xl"
          align={{ md: 'center' }}
        >
          <Box className={classes.box} bdrs="md">
            <Image
              src="/assets/about.png"
              alt="Hand-folded wontons and slow-simmered broth"
              w={350}
              mx="auto"
            />
          </Box>

          <Stack gap="md">
            <Text>
              Mr Wongton began with one idea: a bowl of noodle soup that feels
              like home. We&apos;re a neighborhood spot for family dinners,
              quick lunches, and rainy-day comfort.
            </Text>
            <Text>
              Our menu is built around the classics: wonton noodle soup with
              springy egg noodles, plump pork and shrimp wontons, and a clear,
              savory broth. Alongside the bowls, you&apos;ll find crispy fried
              wontons, sides, and drinks that go well with them.
            </Text>
            <Text>
              Everything is made fresh each day, from the wontons folded in our
              kitchen to the broth that simmers while we prep. We keep the menu
              simple so every dish gets the attention it deserves.
            </Text>
            <Text>
              Whether you&apos;re stopping by for a quick lunch or settling in
              with the whole family, we want you to leave full and happy, and to
              come back next time.
            </Text>
            <Button
              component={Link}
              href="/about"
              variant="filled"
              rightSection={<CaretRightIcon size={16} />}
              color="orange"
              w={150}
              mx={{ base: 'auto', sm: 0 }}
            >
              Read More
            </Button>
          </Stack>
        </Flex>
      </Container>
    </section>
  );
}
