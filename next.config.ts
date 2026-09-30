import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Contentful-hosted blog images (delivery CDN).
    remotePatterns: [
      { protocol: "https", hostname: "images.ctfassets.net" },
      { protocol: "https", hostname: "assets.ctfassets.net" },
    ],
  },
};

export default nextConfig;
