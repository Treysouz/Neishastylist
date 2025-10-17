import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
// Skip initialization during tests to prevent hanging
if (process.env.NODE_ENV !== "test") {
  initOpenNextCloudflareForDev();
}
