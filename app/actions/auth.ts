"use server"

import { signIn, signOut } from "@/auth"

export async function authenticateUser() {
  await signIn("microsoft-entra-id", { redirectTo: "/dashboard" })
}

export async function revokeSession() {
  await signOut({ redirectTo: "/" })
}