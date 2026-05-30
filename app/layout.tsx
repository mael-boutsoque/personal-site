import "./globals.css"
import type { Metadata } from "next"
import { Geist, Anta, Doto } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const anta = Anta({weight:"400",subsets:['latin'],variable:'--font-anta'});
const doto = Doto({subsets:['latin'],variable:'--font-doto'});

export const metadata: Metadata = {
  title: "sitev3",
  description: "",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable, anta.variable, doto.variable)}>
      <body>{children}</body>
    </html>
  )
}
