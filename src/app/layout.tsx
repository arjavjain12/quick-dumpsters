import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: { default: `${site.name} — Roll-Off Dumpster Rentals in ${site.city}`, template: `%s | ${site.name}` },
  description: site.description,
  metadataBase: new URL('https://quickdumpsters.co'),
  openGraph: {
    type: 'website',
    siteName: site.name,
    images: [{ url: site.heroPhoto, width: 1600, height: 1200, alt: site.name }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700&display=swap" />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Script
          src="https://onlyenable.vercel.app/widget.js?k=aw_23b44311423ec5957ecd5364"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
