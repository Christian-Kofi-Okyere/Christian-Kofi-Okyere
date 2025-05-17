/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Christian-Kofi-Okyere' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Christian-Kofi-Okyere/' : '',
};

module.exports = nextConfig;

