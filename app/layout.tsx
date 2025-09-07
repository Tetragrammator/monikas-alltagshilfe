import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Alltagshilfe von Moni - Ihre zuverlässige Unterstützung in Karlsruhe & Malsch",
  description:
    "Professionelle Alltagshilfe von Moni: Kinderbetreuung, Seniorenbegleitung und Unterstützung im Alltag in Karlsruhe und Malsch. Zuverlässig, erfahren und mit Herz.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
