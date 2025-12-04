/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/AzubiKI',
  assetPrefix: '/AzubiKI/',
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
