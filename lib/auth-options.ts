import type { NextAuthConfig } from "next-auth"
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id"

/**
 * NextAuth.js (Auth.js v5) configuration for Microsoft Entra ID (Azure AD).
 *
 * Centralized so it can be reused by both the Edge-compatible `auth` root and
 * the Node.js `handler` (API route) without duplicating provider definitions.
 */
export const authConfig = {
  // Override the default secret-name resolution so AUTH_SECRET is used reliably
  // across both the middleware (Edge runtime) and the API route (Node runtime).
  secret: process.env.AUTH_SECRET,

  // Session strategy must be "jwt" for upstream to run on the Edge runtime
  // (needed by middleware.ts). No database is required.
  session: { strategy: "jwt" },

  providers: [
    MicrosoftEntraID({
      clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
      clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
      issuer: process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER,
      authorization: { params: { scope: "openid profile email" } },
    }),
  ],

  callbacks: {
    jwt({ token, user }) {
      // `user` is only populated on sign-in. Persist the provider user id into
      // the JWT so it survives across requests.
      if (user?.id) {
        token.id = user.id
      }
      return token
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = (token.id as string | undefined) ?? session.user.email ?? ""
      }
      return session
    },
  },

  // Route paths that are always public, regardless of middleware rules.
  pages: {
    signIn: "/",
  },
} satisfies NextAuthConfig

export default authConfig
