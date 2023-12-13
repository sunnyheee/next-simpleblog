/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/contact/aaaaaaa",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/contact/aaaaaaa",
        destination: "/contact",
      },
    ];
  },
};

module.exports = nextConfig;
