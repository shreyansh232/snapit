import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*",
        protocol: "https",
        port: "",
        pathname: "/**",
      },
      {
        hostname: 'lh3.googleusercontent.com'
      }
    ],
  },
};

export default nextConfig;
