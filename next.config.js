/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "i.scdn.co",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
