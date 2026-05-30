import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/sitev3",
  trailingSlash: true,
}

export default nextConfig
