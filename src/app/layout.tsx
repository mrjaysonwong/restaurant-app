import type { Metadata } from 'next';
import { Poppins, Gochi_Hand } from 'next/font/google';
import { MantineProvider, mantineHtmlProps } from '@mantine/core';
import { theme } from '@/components/layout/theme';
import '@mantine/core/styles.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const gochiHand = Gochi_Hand({
  variable: '--font-gochihand',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Mr Wongton',
  description: 'Wonton noodle soup restaurant',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      {...mantineHtmlProps}
      className={`${poppins.variable} ${gochiHand.variable}`}
    >
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
