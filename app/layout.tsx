import "./globals.css"
import type { Metadata } from "next"
import { Geist, Anta } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const anta = Anta({weight:"400",subsets:['latin'],variable:'--font-anta'});

export const metadata: Metadata = {
  title: "Maël Boutsoque | Digital Systems Engineer",
  description: "Digital Systems Engineering student at ENSEM, specializing in embedded systems and hardware design.",
  icons: "/logo_no_bg.svg",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable, anta.variable)}>
      <body>
        {children}
      </body>
    </html>
  )
}
