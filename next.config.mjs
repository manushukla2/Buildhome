/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use remotePatterns (domains is deprecated in Next.js 14)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

export default nextConfig;
