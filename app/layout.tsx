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
  keywords: [
    "Alltagshilfe Karlsruhe",
    "Alltagshilfe Malsch",
    "Kinderbetreuung Karlsruhe",
    "Seniorenbegleitung Malsch",
    "Haushaltshilfe Karlsruhe",
    "Betreuung Senioren",
    "Schulabholung Karlsruhe",
    "Einkaufshilfe",
    "Arztbegleitung",
    "Alltagsunterstützung Baden-Württemberg",
  ],
  authors: [{ name: "Monika - Alltagshilfe" }],
  creator: "Alltagshilfe von Moni",
  publisher: "Alltagshilfe von Moni",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://alltagshilfe-moni.vercel.app",
    siteName: "Alltagshilfe von Moni",
    title: "Alltagshilfe von Moni - Karlsruhe & Malsch",
    description:
      "Zuverlässige Alltagshilfe: Kinderbetreuung, Seniorenbegleitung und Unterstützung im Alltag in Karlsruhe und Malsch.",
    images: [
      {
        url: "/moni.png",
        width: 400,
        height: 400,
        alt: "Monika - Ihre zuverlässige Alltagshelferin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alltagshilfe von Moni - Karlsruhe & Malsch",
    description: "Zuverlässige Alltagshilfe: Kinderbetreuung, Seniorenbegleitung und Unterstützung im Alltag.",
    images: ["/moni.png"],
  },
  alternates: {
    canonical: "https://alltagshilfe-moni.vercel.app",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Alltagshilfe von Moni",
              description:
                "Professionelle Alltagshilfe: Kinderbetreuung, Seniorenbegleitung und Unterstützung im Alltag",
              url: "https://alltagshilfe-moni.vercel.app",
              telephone: "noch nicht verfügbar",
              email: "alltagshilfe.malsch@proton.me",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Malsch",
                addressRegion: "Baden-Württemberg",
                addressCountry: "DE",
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Karlsruhe",
                },
                {
                  "@type": "City",
                  name: "Malsch",
                },
              ],
              serviceType: [
                "Kinderbetreuung",
                "Seniorenbegleitung",
                "Alltagsunterstützung",
                "Einkaufshilfe",
                "Arztbegleitung",
              ],
              founder: {
                "@type": "Person",
                name: "Monika",
                jobTitle: "Alltagshelferin",
              },
              image: "https://alltagshilfe-moni.vercel.app/moni.png",
              priceRange: "Auf Anfrage",
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
