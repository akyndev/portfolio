import type { Metadata } from "next"
import "./globals.css"
import { asap, commissioner } from "./fonts"
import LenisProvider from "@/providers/lenis"
import { cn } from "@/lib/utils"
import Nav from "@/components/nav"
import Cursor from "@/components/cursor"
import { homeMetadata } from "../../seo/metadata"

export const metadata: Metadata = homeMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <LenisProvider>
        <body className={cn("relative overflow-x-hidden bg-gray-900 text-white", asap.className)}>
          <Nav />
          {children}
          <Cursor />
        </body>
      </LenisProvider>
    </html>
  )
}
