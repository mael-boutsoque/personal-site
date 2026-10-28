import type { Metadata } from "next"
import { LegalNoticePage, legalNoticeMetadata } from "@/components/pages/legal-notice-page"

export const metadata: Metadata = legalNoticeMetadata("en")

export default function LegalNotice() {
  return <LegalNoticePage lang="en" />
}
