import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/personal-site",
  trailingSlash: true,
  allowedDevOrigins: ["172.31.128.16"],
}

export default nextConfig
