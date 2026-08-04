import "./globals.css"
import type { Metadata } from "next"
import { Geist, Anta } from "next/font/google";
import { cn } from "@/lib/utils";
import { LenisProvider } from "@/components/lenis-provider";
import { FloatingHeader } from "@/components/floating-header";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const anta = Anta({weight:"400",subsets:['latin'],variable:'--font-anta'});

export const metadata: Metadata = {
  title: {
    default: "Maël Boutsoque | Digital Systems Engineer",
    template: "%s | Maël Boutsoque",
  },
  description: "Embedded systems and hardware design portfolio by Maël Boutsoque, a Digital Systems Engineering student at ENSEM specializing in low-level programming and PCB design.",
  icons: "/logo_no_bg.svg",
  verification: {
    google: "iFESq7sLykQuc0qIR7hGkxuawUwmytxw4fAH5DPPzl0",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable, anta.variable)}>
      <body>
        <LenisProvider>
          <FloatingHeader />
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
