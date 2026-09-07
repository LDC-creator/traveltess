import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Open_Sans, Bodoni_Moda } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-playfair',
  display: 'swap',
})

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-bodoni',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

const siteUrl = 'https://bijoutravel.co.uk'
const siteTitle = 'Bijou Travel | Bespoke Travel Agency in Fulham, London'
const siteDescription =
  'Bijou Travel is an independent, boutique travel agency based in Fulham, London. We design tailor-made holidays, luxury safaris, honeymoons and bespoke journeys worldwide, backed by ABTA & ATOL protection and a dedicated personal specialist.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Bijou Travel',
  },
  description: siteDescription,
  keywords: [
    'travel agent Fulham',
    'travel agency Fulham',
    'travel agent London',
    'boutique travel agency London',
    'bespoke travel agency',
    'luxury travel agent London',
    'independent travel agent',
    'tailor-made holidays',
    'personal travel consultant',
    'private travel concierge London',
    'luxury holiday planner',
    'honeymoon travel agent',
    'safari holiday specialist',
    'Maldives holiday specialist',
    'Greek islands holidays',
    'Santorini holiday specialist',
    'ATOL protected holidays',
    'ABTA travel agent',
    'travel agent SW6',
    'travel agent near me',
    'custom holiday planner UK',
    'luxury holidays Fulham',
    'trip planner London',
  ],
  authors: [{ name: 'Bijou Travel' }],
  creator: 'Bijou Travel',
  publisher: 'Bijou Travel',
  category: 'Travel',
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: 'Bijou Travel',
    title: siteTitle,
    description:
      'Independent, boutique travel agency in Fulham, London. Tailor-made holidays, luxury safaris and bespoke journeys, designed around you.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bijou Travel — bespoke travel, thoughtfully designed. Fulham, London.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description:
      'Independent, boutique travel agency in Fulham, London. Tailor-made holidays, luxury safaris and bespoke journeys, designed around you.',
    images: ['/og-image.jpg'],
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png?v=2',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png?v=2',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg?v=2',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png?v=2',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Bijou Travel',
  image: `${siteUrl}/og-image.jpg`,
  url: siteUrl,
  telephone: '+447495835481',
  priceRange: '££',
  description: siteDescription,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Fulham Broadway',
    addressLocality: 'London',
    postalCode: 'SW6',
    addressCountry: 'GB',
  },
  areaServed: 'Worldwide',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf9f6' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light bg-background ${playfair.variable} ${openSans.variable} ${bodoniModa.variable}`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
