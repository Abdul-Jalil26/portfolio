import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No basePath needed anymore
  images: {
    unoptimized: true, // important for GitHub Pages
  },
};

export default nextConfig;
