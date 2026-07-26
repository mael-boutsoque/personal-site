import AnimatedTypingMotion from "@/components/shadcn-space/animated-text/animated-text-03"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-[12rem] leading-none font-bold tracking-tight">404</h1>
      <AnimatedTypingMotion
        words={[
          "Page not found...",
          "This page does not exist.",
          "Are you lost?",
          "Let's get you back home.",
        ]}
      />
      <Link
        href="/"
        className="mt-4 rounded-xl border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
      >
        Go back home
      </Link>
    </div>
  )
}
