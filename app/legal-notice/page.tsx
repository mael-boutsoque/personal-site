import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal Notice",
  description: "Legal notices for the website of Maël Boutsoque: publisher identification, contact details, intellectual property, hosting and personal data policy.",
}

export default function LegalNoticePage() {
  return (
    <main className="min-h-screen px-4 md:px-6 py-24">
      <div className="mx-auto max-w-3xl space-y-10">
        <Link href="/" className="text-sm text-primary underline-offset-4 hover:underline">
          ← Back to home
        </Link>

        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Legal Notice</h1>
          <p className="text-muted-foreground">Mentions légales du site</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Publisher</h2>
          <p className="text-sm text-foreground leading-relaxed">
            This website is published by Maël Boutsoque. As the publisher, Maël Boutsoque is responsible for the
            content published on this site and ensures it is kept accurate and up to date as far as reasonably possible.
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            Contact: <a href="mailto:mael.boutsoque@gmail.com" className="text-primary underline-offset-4 hover:underline">mael.boutsoque@gmail.com</a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Hosting</h2>
          <p className="text-sm text-foreground leading-relaxed">
            This site is a static website with no server-side processing. It is built with Next.js and hosted on the
            deployment platform used to publish this portfolio (Vercel). The host provides the servers, storage and
            network infrastructure on which the site is delivered to visitors.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Intellectual Property</h2>
          <p className="text-sm text-foreground leading-relaxed">
            The structure, texts, images, logos and all other elements presented on this website are the property of
            Maël Boutsoque unless otherwise stated. They are protected by intellectual property law. Any reproduction,
            representation, distribution or use, in whole or in part, without prior written consent is prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Personal Data</h2>
          <p className="text-sm text-foreground leading-relaxed">
            In accordance with the French data protection act (Loi Informatique et Libertés) and the General Data
            Protection Regulation (GDPR), you have the right to access, rectify, erase, restrict and object to the
            processing of your personal data. You may exercise these rights by contacting the publisher at the email
            address listed above.
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            This website does not collect or process personal data. It uses no analytic or tracking cookies beyond what
            is strictly necessary to deliver the pages you request.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Liability</h2>
          <p className="text-sm text-foreground leading-relaxed">
            The information provided on this site is intended for general information. While every effort is made to
            keep it accurate, it is provided without warranty of any kind and does not constitute professional advice.
            Access to any external sites linked from this page remains at the visitor's own responsibility.
          </p>
        </section>
      </div>
    </main>
  )
}