import type { Metadata } from "next"
import { LegalNoticePage, legalNoticeMetadata } from "@/components/pages/legal-notice-page"

export const metadata: Metadata = legalNoticeMetadata("fr")

export default function LegalNotice() {
  return <LegalNoticePage lang="fr" />
}
