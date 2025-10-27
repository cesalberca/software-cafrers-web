import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://cesalberca.com/software-cafrers',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
