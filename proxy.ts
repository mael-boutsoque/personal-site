import { auth } from "@/auth"

export default auth((req) => {
  const isLoggedIn = Boolean(req.auth)

  if (!isLoggedIn && req.nextUrl.pathname !== "/") {
    const redirectUrl = new URL("/api/auth/signin", req.nextUrl.origin)
    redirectUrl.searchParams.set("callbackUrl", req.nextUrl.pathname)
    return Response.redirect(redirectUrl)
  }
})

export const config = {
  matcher: ["/dashboard/:path*", "/dashboard"],
}