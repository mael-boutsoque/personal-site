import { auth } from "@/auth"
import { authenticateUser, revokeSession } from "@/app/actions/auth"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default async function AuthExamplePage() {
  const session = await auth()

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold">Auth Example</h1>

      {session?.user ? (
        <div className="mt-8 flex items-center gap-4 rounded-xl border bg-card p-4">
          {session.user.image ? (
            <Image
              src={session.user.image}
              alt={session.user.name ?? "Profile picture"}
              width={64}
              height={64}
              className="size-16 rounded-full"
              priority
            />
          ) : (
            <div className="flex size-16 items-center justify-center rounded-full bg-foreground/10 text-2xl">
              {(session.user.name ?? "?").charAt(0).toUpperCase()}
            </div>
          )}

          <div className="min-w-0">
            <p className="truncate font-medium">{session.user.name ?? "No name"}</p>
            <p className="truncate text-sm text-muted-foreground">{session.user.email ?? "No email"}</p>
            <p className="mt-1 text-xs text-muted-foreground">id: {session.user.id}</p>
          </div>
        </div>
      ) : (
        <p className="mt-8 rounded-xl border border-dashed p-4 text-sm text-muted-foreground">
          You are not signed in.
        </p>
      )}

      {session?.user ? (
        <form action={revokeSession} className="mt-8">
          <button
            type="submit"
            className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
          >
            Sign out
          </button>
        </form>
      ) : (
        <form action={authenticateUser} className="mt-8">
          <button
            type="submit"
            className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
          >
            Sign in with Microsoft
          </button>
        </form>
      )}
    </main>
  )
}