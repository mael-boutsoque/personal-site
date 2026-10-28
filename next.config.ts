import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  trailingSlash: true,
  allowedDevOrigins: ["172.31.128.16"],
  // Keep the dev tools indicator clear of the color picker in the bottom-left corner.
  devIndicators: { position: "bottom-right" },
}

export default nextConfig
