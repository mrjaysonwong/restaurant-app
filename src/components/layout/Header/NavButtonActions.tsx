import { Button, Group } from '@mantine/core';
import { ShoppingBagOpenIcon } from '@phosphor-icons/react';

interface NavButtonActionsProps {
  opened?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function NavButtonActions({ opened, size }: NavButtonActionsProps) {
  return (
    <Group gap="xs">
      <Button
        variant="outline"
        color={opened ? 'black' : 'white'}
        autoContrast
        size={size}
      >
        Account
      </Button>
      <Button
        color="yellow"
        autoContrast
        size={size}
        rightSection={<ShoppingBagOpenIcon size={24} />}
      >
        Order
      </Button>
    </Group>
  );
}
