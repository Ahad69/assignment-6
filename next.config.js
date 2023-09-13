/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.startech.com.bd",
      "wallpaperaccess.com",
      "ik.imagekit.io",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
