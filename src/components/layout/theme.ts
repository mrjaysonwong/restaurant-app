'use client';

import { Container, createTheme } from '@mantine/core';

export const theme = createTheme({
  fontFamily: 'var(--font-poppins), sans-serif',
  components: {
    Container: Container.extend({ defaultProps: { size: 'lg' } }),
  },
});
