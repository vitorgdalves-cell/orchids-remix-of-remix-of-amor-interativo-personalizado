import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, "src/visual-edits/component-tagger-loader.js");

const nextConfig: NextConfig = {
  basePath: "/orchids-remix-of-remix-of-remix-of-amor-interativo-personalizado",
  assetPrefix: "/orchids-remix-of-remix-of-remix-of-amor-interativo-personalizado",
  output: 'export',
  
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" }
    ]
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      loader: LOADER,
    });
    return config;
  },
};

export default nextConfig;
