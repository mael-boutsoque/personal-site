import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  trailingSlash: true,
  allowedDevOrigins: ["172.31.128.16"],
}

export default nextConfig
