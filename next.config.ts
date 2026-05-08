import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingExcludes: {
    "/api/training-control": [
      "./public/**/*",
      "./work/**/*",
      "./output/**/*",
      "./playwright-artifacts/**/*",
    ],
    "/api/training-status": [
      "./public/**/*",
      "./work/**/*",
      "./output/**/*",
      "./playwright-artifacts/**/*",
    ],
  },
};

export default nextConfig;
