import "./globals.css"
import type { Metadata } from "next"
import { Geist, Anta } from "next/font/google";
import { cn } from "@/lib/utils";
import { defaultDescription, siteName } from "@/lib/seo";
import { siteUrl } from "@/lib/site";
import { ColorPickerWidget } from "@/components/color-picker-widget";
import { themeColorPreloadScript } from "@/lib/theme-color";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const anta = Anta({weight:"400",subsets:['latin'],variable:'--font-anta'});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Maël Boutsoque | Digital Systems Engineer",
    template: "%s | Maël Boutsoque",
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "technology",
  keywords: [
    "Maël Boutsoque",
    "embedded systems engineer",
    "hardware design",
    "PCB design",
    "STM32",
    "FreeRTOS",
    "low-level programming",
    "ENSEM",
    "Altium Designer",
  ],
  icons: "/logo_no_bg.svg",
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName,
    locale: "en_US",
    url: siteUrl,
    title: "Maël Boutsoque | Digital Systems Engineer",
    description: defaultDescription,
    images: [
      {
        url: "/og/",
        width: 1200,
        height: 630,
        alt: "Maël Boutsoque — Digital Systems Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maël Boutsoque | Digital Systems Engineer",
    description: defaultDescription,
    images: ["/og/"],
  },
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
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(location.pathname==='/fr'||location.pathname.startsWith('/fr/'))document.documentElement.lang='fr'}catch(e){}",
          }}
        />
        <script dangerouslySetInnerHTML={{ __html: themeColorPreloadScript }} />
        {children}
        <ColorPickerWidget />
      </body>
    </html>
  )
}
