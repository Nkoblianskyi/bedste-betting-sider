import type React from "react"
import type { Metadata } from "next"
import { Vollkorn } from "next/font/google"
import "./globals.css"

const inter = Vollkorn({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bedste Bettingsider Danmark 2025 | Top Betting Sites & Bonusser",
  description:
    "Find Danmarks bedste bettingsider i 2025. Sammenlign bonusser, odds og anmeldelser af de mest pålidelige betting sites. Ekspert-anbefalinger og sikre licenser.",
  keywords:
    "betting sites Danmark, bedste bettingsider, betting bonusser, odds sammenligning, danske betting sites, online betting Danmark, sportsbook anmeldelser",
  authors: [{ name: "Bedste Bettingsider Danmark" }],
  creator: "Bedste Bettingsider Danmark",
  publisher: "Bedste Bettingsider Danmark",
  robots: "index, follow",
  openGraph: {
    title: "Bedste Bettingsider Danmark 2025 | Top Betting Sites & Bonusser",
    description:
      "Find Danmarks bedste bettingsider i 2025. Sammenlign bonusser, odds og anmeldelser af de mest pålidelige betting sites.",
    url: "https://bedstebettingsiderdk.com",
    siteName: "Bedste Bettingsider Danmark",
    locale: "da_DK",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Bedste Bettingsider Danmark - Top Betting Sites 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bedste Bettingsider Danmark 2025",
    description: "Find Danmarks bedste bettingsider med de bedste bonusser og odds.",
    images: ["/denmark.png"],
  },
  alternates: {
    canonical: "https://bedstebettingsiderdk.com",
  },
  other: {
    "google-site-verification": "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#00ff41" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
