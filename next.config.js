/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org', 'images.unsplash.com','image.tmdb.org']
  },
  swcMinify: false,
 env:{

 }
};

module.exports = nextConfig;

    // path: 'https://upload.wikimedia.org/wikipedia/',