// Canonical site URL used for SEO metadata (sitemap, robots, structured data).
// Override with NEXT_PUBLIC_SITE_URL when deploying to a custom domain.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://boutsoque.vercel.app"
).replace(/\/$/, "")
