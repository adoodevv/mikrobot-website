import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
    ],
  },
  // Enable compression
  compress: true,
  // Remove X-Powered-By header for security
  poweredByHeader: false,
  // Optimize production builds
  reactStrictMode: true,
};

export default nextConfig;
