import type { NextConfig } from "next";

const localAssetExcludes = [
  "./public/**/*",
  "./work/**/*",
  "./output/**/*",
  "./playwright-artifacts/**/*",
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingExcludes: {
    "/api/training-control": localAssetExcludes,
    "/api/training-status": localAssetExcludes,
    "/lab/ai": localAssetExcludes,
  },
};

export default nextConfig;
