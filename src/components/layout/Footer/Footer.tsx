// components/Footer.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Group,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
} from '@mantine/core';
import {
  FacebookLogoIcon,
  ForkKnifeIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from '@phosphor-icons/react';
import classes from './Footer.module.css';

const columns = [
  {
    title: 'Company',
    links: ['Home', 'About Us', 'Blog', 'Careers', 'Contact Us'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Track Order', 'Returns', 'Shipping Info', 'FAQs'],
  },
  {
    title: 'Legal',
    links: [
      'Terms & Conditions',
      'Privacy Policy',
      'Cookie Policy',
      'Refund Policy',
    ],
  },
];

const socials = [
  { label: 'Facebook', Icon: FacebookLogoIcon },
  { label: 'Instagram', Icon: InstagramLogoIcon },
  { label: 'Twitter', Icon: TwitterLogoIcon },
];

export function Footer() {
  return (
    <Box component="footer" bg="#242424" py={40}>
      <Container>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          gap={{ base: 32, md: 48 }}
        >
          {/* Brand */}
          <Box maw={260}>
            {/* <Group gap={10} mb="sm">
              <Link href="/">
                <Image
                  className={classes.logo}
                  src="/assets/brand_logo.png"
                  alt="Mr Wongton logo"
                  width={110}
                  height={40}
                  priority
                  style={{
                    height: 'auto',
                  }}
                />
              </Link>
            </Group> */}
            <Text c="#FEFAF3" fz="sm" lh={1.6}>
              Simple food done properly. Wontons, noodles, broth, and nothing to
              hide behind.
            </Text>
            <Group gap="sm" mt="md">
              {socials.map(({ label, Icon }) => (
                <ActionIcon
                  key={label}
                  aria-label={label}
                  variant="light"
                  color="gray"
                  radius="xl"
                  size={32}
                >
                  <Icon size={24} />
                </ActionIcon>
              ))}
            </Group>
          </Box>

          {/* Link columns */}
          <Flex gap={{ base: 32, md: 56 }} wrap="wrap">
            {columns.map((col) => (
              <Box key={col.title} miw={110}>
                <Text fw={600} fz="sm" mb="sm" c="#FEFAF3">
                  {col.title}
                </Text>
                <Stack gap={10}>
                  {col.links.map((l) => (
                    <Anchor
                      key={l}
                      href="#"
                      c="#FEFAF3"
                      fz="xs"
                      underline="never"
                    >
                      {l}
                    </Anchor>
                  ))}
                </Stack>
              </Box>
            ))}
          </Flex>

          {/* Newsletter */}
          <Box maw={280}>
            <Text fw={600} fz="sm" mb="sm" c="#FEFAF3">
              Newsletter
            </Text>
            <Text c="#FEFAF3" fz="xs" mb="sm" lh={1.6}>
              Subscribe to get latest updates and exclusive offers.
            </Text>
            <Group gap="xs" wrap="nowrap">
              <TextInput
                placeholder="Your Email"
                size="xs"
                radius="md"
                style={{ flex: 1 }}
              />
              <Button size="xs" radius="md" color="orange">
                Subscribe
              </Button>
            </Group>
          </Box>
        </Flex>

        <Divider my="xl" color="gray.7" />

        <Text c="dimmed" fz="xs">
          © 2026 Mr Wongton. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}
