/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Set the base path to your repository name
  // Change 'website-main' to your actual GitHub repository name
  basePath: process.env.NODE_ENV === 'production' ? '/Christian-Kofi-Okyere' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Christian-Kofi-Okyere/' : '',
};

module.exports = nextConfig;

