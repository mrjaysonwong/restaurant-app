import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    optimizePackageImports: [
      '@phosphor-icons/react',
      '@mantine/core',
      '@mantine/hooks',
    ],
  },
};

export default nextConfig;
