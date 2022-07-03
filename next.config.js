const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {},
  // basePath: isProd ? "/clean-air-for-all-now" : "",
  // assetPrefix: isProd ? "/clean-air-for-all-now/" : "",
  images: {
    loader: "custom",
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
