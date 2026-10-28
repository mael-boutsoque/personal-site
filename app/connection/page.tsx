import { auth } from "@/auth"
import { authenticateUser, revokeSession } from "@/app/actions/auth"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default async function ConnectionPage() {
  const session = await auth()
  const user = session?.user

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold">Connection</h1>
      <p className="mt-1 text-muted-foreground">
        {user
          ? "You are connected with your Microsoft Entra ID (Azure AD) account."
          : "Connect with your Microsoft Entra ID (Azure AD) account."}
      </p>

      <div className="mt-8 rounded-xl border bg-card p-6">
        {user ? (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name ?? "Profile picture"}
                  width={64}
                  height={64}
                  className="size-16 rounded-full"
                  priority
                />
              ) : (
                <div className="flex size-16 items-center justify-center rounded-full bg-foreground/10 text-2xl">
                  {(user.name ?? "?").charAt(0).toUpperCase()}
                </div>
              )}

              <div className="min-w-0">
                <p className="truncate font-medium">{user.name ?? "No name"}</p>
                <p className="truncate text-sm text-muted-foreground">{user.email ?? "No email"}</p>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-background p-3 text-sm">
              <span className="text-muted-foreground">Status</span>
              <span className="flex items-center gap-2 font-medium">
                <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
                Connected
              </span>
            </div>

            <form action={revokeSession}>
              <button
                type="submit"
                className="w-full rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
              >
                Sign out
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-background p-3 text-sm">
              <span className="text-muted-foreground">Status</span>
              <span className="flex items-center gap-2 font-medium">
                <span className="size-2 rounded-full bg-muted-foreground/50" aria-hidden="true" />
                Not connected
              </span>
            </div>

            <form action={authenticateUser}>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
              >
                <svg viewBox="0 0 23 23" className="size-4" aria-hidden="true">
                  <rect x="1" y="1" width="10" height="10" fill="#f25022" />
                  <rect x="12" y="1" width="10" height="10" fill="#7fba00" />
                  <rect x="1" y="12" width="10" height="10" fill="#00a4ef" />
                  <rect x="12" y="12" width="10" height="10" fill="#ffb900" />
                </svg>
                Continue with Microsoft
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  )
}