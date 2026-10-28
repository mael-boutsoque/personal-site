import { SiteShell } from "@/components/site-shell"

export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="fr">{children}</SiteShell>
}
