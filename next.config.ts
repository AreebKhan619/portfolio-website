import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Serve AVIF where the browser supports it; WebP stays the fallback.
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    // Pin the root so a stray lockfile/workspace file higher up is never picked up.
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
