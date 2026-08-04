import Link from "next/link"

export default function LegalNoticePage() {
  return (
    <main className="min-h-screen px-4 md:px-6 py-24">
      <div className="mx-auto max-w-3xl space-y-10">
        <Link href="/" className="text-sm text-primary underline-offset-4 hover:underline">
          ← Back to home
        </Link>

        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Legal Notice</h1>
          <p className="text-muted-foreground">Mentions légales</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Publisher</h2>
          <p className="text-sm text-foreground">
            This website is published by Maël Boutsoque.
          </p>
          <p className="text-sm text-foreground">
            Contact: <a href="mailto:mael.boutsoque@gmail.com" className="text-primary underline-offset-4 hover:underline">mael.boutsoque@gmail.com</a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Hosting</h2>
          <p className="text-sm text-foreground">
            This site is a static website and is hosted by the provider used to publish this portfolio.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Intellectual Property</h2>
          <p className="text-sm text-foreground">
            The content of this website (text, images, logos) is the property of Maël Boutsoque unless otherwise
            stated. Any reproduction, distribution or use without prior written consent is prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Personal Data</h2>
          <p className="text-sm text-foreground">
            This website does not collect or process any personal data. No cookies are used, and no analytics or
            tracking tools are embedded.
          </p>
        </section>
      </div>
    </main>
  )
}