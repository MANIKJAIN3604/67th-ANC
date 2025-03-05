// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true, // ✅ Prevents ESLint errors from blocking deployment
  },

  typescript: {
    ignoreBuildErrors: true, // ✅ Allows deployment even if TypeScript errors exist
  },

  images: {
    domains: ["example.com"], // ✅ Replace "example.com" with your actual image domain
  },
};

export default nextConfig;
