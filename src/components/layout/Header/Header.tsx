'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Box, Container, Group } from '@mantine/core';
import { useHeadroom, useWindowScroll } from '@mantine/hooks';
import classes from './Header.module.css';
import { menuItems } from './nav-items';
import { MobileMenu } from './MobileMenu';
import { NavButtonActions } from './NavButtonActions';

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const { scrollProgress } = useHeadroom({ fixedAt: 120, scrollDistance: 60 });
  const [scroll] = useWindowScroll();
  const scrolled = scroll.y > 120;

  const backgroundColor = isHomePage
    ? scrolled
      ? '#d95300'
      : 'transparent'
    : '#d95300';

  return (
    <Box
      component="header"
      className={classes.header}
      style={{
        transform: `translateY(${(scrollProgress - 1) * 100}%)`,
        backgroundColor: backgroundColor,
      }}
    >
      <Container h="100%">
        <Group h="100%" justify="space-between">
          <Link href="/">
            <Image
              className={classes.logo}
              src="/assets/brand_logo.png"
              alt="Mr Wongton logo"
              width={180}
              height={90}
              priority
            />
          </Link>

          <Box component="nav" visibleFrom="md" aria-label="Main navigation">
            <Group gap="xl">
              {menuItems.map((item) => (
                <Link key={item.href} href={item.href} className={classes.link}>
                  {item.label}
                </Link>
              ))}
            </Group>
          </Box>

          <Box visibleFrom="md">
            <NavButtonActions size="sm" />
          </Box>

          <MobileMenu />
        </Group>
      </Container>
    </Box>
  );
}
