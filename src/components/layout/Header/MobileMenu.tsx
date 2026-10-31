import Link from 'next/link';
import { ActionIcon, Drawer, NavLink, Divider, Center } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ListIcon } from '@phosphor-icons/react';
import { menuItems } from './nav-items';
import { NavButtonActions } from './NavButtonActions';

export function MobileMenu() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <ActionIcon
        variant="transparent"
        size="xl"
        hiddenFrom="md"
        aria-label="Open Navigation Menu"
        onClick={open}
      >
        <ListIcon size={48} color="black" />
      </ActionIcon>

      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        title="Mobile navigation menu"
        styles={{
          title: {
            display: 'none',
          },
        }}
        transitionProps={{ duration: 0 }}
        zIndex={10000}
        closeButtonProps={{
          size: 'xl',
          'aria-label': 'Close navigation menu',
        }}
      >
        <nav aria-label="Mobile navigation">
          {menuItems.map((item) => (
            <NavLink
              key={item.href}
              component={Link}
              href={item.href}
              label={item.label}
              onClick={close}
              styles={{ label: { fontSize: '1.5rem' } }}
              fw={600}
            />
          ))}
        </nav>

        <Divider my="lg" />

        <Center>
          <NavButtonActions opened={opened} size="lg" />
        </Center>
      </Drawer>
    </>
  );
}
