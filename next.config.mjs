/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bostakinmobiliaria.com',
      },
    ],
  },
};

export default nextConfig;
