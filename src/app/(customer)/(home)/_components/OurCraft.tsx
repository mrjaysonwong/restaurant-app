'use client';
import Image from 'next/image';
import { Box, Card, Container, Flex, Text, Title } from '@mantine/core';
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
          <Card className={classes.card} w={200} h={450} p="sm">
            <Image
              src="/assets/our-craft.png"
              alt="Hand-folded wontons and slow-simmered broth"
              width={200}
              height={450}
              style={{
                borderRadius: '0.5rem',
                width: '100%',
                height: '100%',
              }}
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
