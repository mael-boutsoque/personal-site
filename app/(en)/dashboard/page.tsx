import { auth } from "@/auth"
import { authenticateUser, revokeSession } from "@/app/actions/auth"
import Image from "next/image"
import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default async function DashboardPage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/api/auth/signin?callbackUrl=/dashboard")
  }

  const { name, email, image } = session.user

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="mt-1 text-muted-foreground">
        Signed in with your Microsoft Entra ID (Azure AD) account.
      </p>

      <div className="mt-8 flex items-center gap-4 rounded-xl border p-4">
        {image ? (
          <Image
            src={image}
            alt={name ?? "Profile picture"}
            width={64}
            height={64}
            className="size-16 rounded-full"
            priority
          />
        ) : (
          <div className="flex size-16 items-center justify-center rounded-full bg-foreground/10 text-2xl">
            {(name ?? "?").charAt(0).toUpperCase()}
          </div>
        )}

        <div className="min-w-0">
          <p className="truncate font-medium">{name ?? "No name"}</p>
          <p className="truncate text-sm text-muted-foreground">{email ?? "No email"}</p>
        </div>
      </div>

      <form action={revokeSession} className="mt-8">
        <button
          type="submit"
          className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
        >
          Sign out
        </button>
      </form>
    </main>
  )
}