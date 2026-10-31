'use client';

import Image from 'next/image';
import { Box, Title, Text, Button, Flex } from '@mantine/core';
import { ArrowRightIcon } from '@phosphor-icons/react';
import classes from './HeroHeader.module.css';

export function HeroHeader() {
  return (
    <section className={classes.hero}>
      <Flex
        direction={{ base: 'column', xs: 'row' }}
        align="center"
        gap="xs"
        w={{ base: '100%', sm: '80%', md: '90%', lg: '70%' }}
      >
        <Box flex={6}>
          <Title order={1} textWrap="balance" className={classes.title}>
            Your Perfect Wonton Bowl.
          </Title>

          <Text textWrap="balance">
            Hand-crafted wontons. Rich, soulful broth, Steaming fresh.
          </Text>

          <Button
            variant="gradient"
            gradient={{ from: 'orange', to: 'yellow', deg: 90 }}
            size="lg"
            radius="xl"
            my="sm"
            c="black"
            rightSection={<ArrowRightIcon size={24} />}
          >
            Order Now
          </Button>
        </Box>

        <Box flex={6} className={classes.imageShadow}>
          <Image
            className={classes.image}
            src="/assets/test-bowl-v1.png"
            alt="Wonton Noodle Soup"
            width={600}
            height={600}
            priority
            unoptimized
          />
        </Box>
      </Flex>
    </section>
  );
}
