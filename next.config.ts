import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "/api/:path*", //TODO: change for the real api path
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "uploads.disquscdn.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
