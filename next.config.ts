import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    unoptimized: true,
    minimumCacheTTL: 604800,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
