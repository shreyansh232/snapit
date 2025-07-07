import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      hostname: 'snapit.b-cdn.net',
      protocol: 'https',
      port: '',
      pathname: '/**'
    }, {
      hostname: 'lh3.googleusercontent.com'
    }]
  }
};

export default nextConfig;
