import type { NextConfig } from "next";

const localAssetExcludes = [
  "./public/**/*",
  "./work/**/*",
  "./output/**/*",
  "./playwright-artifacts/**/*",
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  outputFileTracingExcludes: {
    "/api/training-control": localAssetExcludes,
    "/api/training-status": localAssetExcludes,
    "/lab/ai": localAssetExcludes,
  },
};

export default nextConfig;
