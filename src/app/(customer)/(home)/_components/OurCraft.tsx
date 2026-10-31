'use client';
import { Box, Card, Container, Flex, Image, Text, Title } from '@mantine/core';
import { QuotesIcon } from '@phosphor-icons/react';
import classes from './OurCraft.module.css';

export function OurCraft() {
  return (
    <Box component="section" className={classes.craft}>
      <Box className={classes.band} />

      <Container pos="relative">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          gap={{ base: 'xl', md: 60 }}
        >
          <Card className={classes.card} h={450} w={200} p="sm">
            <Image
              src="/assets/our-craft.png"
              alt="Hand-folded wontons and slow-simmered broth"
              h="100%"
              w="100%"
              style={{ objectPosition: 'center', borderRadius: '0.5rem' }}
            />
          </Card>

          <Box pos="relative" px="lg">
            <QuotesIcon
              className={classes.quoteIcon}
              weight="fill"
              size={140}
              aria-hidden="true"
            />
            <Text
              fz={{ base: 'xl', md: 32 }}
              fw={500}
              lh={1.5}
              ff="var(--font-gochihand)"
              c="white"
              ta={{ base: 'center', md: 'left' }}
            >
              Every <span style={{ color: '#9e0419' }}>wonton</span> is folded
              by hand and every pot of{' '}
              <span style={{ color: '#9e0419' }}>broth</span> simmers for hours.
              Being part of our customers lives and community is what we aim
              for.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
