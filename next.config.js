/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org', 'images.unsplash.com'],
    loader: 'imgix',
    path: 'https://upload.wikimedia.org/wikipedia/',
  },
  swcMinify: false
};

module.exports = nextConfig;
