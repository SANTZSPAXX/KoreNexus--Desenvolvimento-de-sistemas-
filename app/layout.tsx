import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

/**
 * SEO METADATA CONFIGURATION
 * 
 * Palavras-chave principais para SEO local em Jundiaí e região:
 * - "Desenvolvimento de sistemas em Jundiaí"
 * - "Criação de aplicativos Jundiaí"
 * - "Softwares para empresas SP"
 * - "Fábrica de software Jundiaí"
 * - "Empresa de tecnologia Campinas"
 * - "Automação comercial Jundiaí"
 * - "Sistemas personalizados Louveira"
 * - "Desenvolvimento de apps Itupeva"
 * 
 * Para configurar o sitemap.xml:
 * Crie o arquivo app/sitemap.ts com a função generateSitemap()
 * 
 * Para configurar o robots.txt:
 * Crie o arquivo app/robots.ts com as regras de crawling
 */

export const metadata: Metadata = {
  title: {
    default: "Kore Nexus | Fábrica de Software em Jundiaí - Sistemas e Aplicativos",
    template: "%s | Kore Nexus",
  },
  description:
    "Kore Nexus: Ecossistema tecnológico inteligente para empresas. Desenvolvimento de sistemas em Jundiaí, criação de aplicativos, automação comercial e softwares para empresas SP. Atendemos Campinas, Louveira, Itupeva e região.",
  keywords: [
    "desenvolvimento de sistemas Jundiaí",
    "criação de aplicativos Jundiaí",
    "softwares para empresas SP",
    "fábrica de software Jundiaí",
    "empresa de tecnologia Campinas",
    "automação comercial Jundiaí",
    "sistemas personalizados Louveira",
    "desenvolvimento de apps Itupeva",
    "software sob medida Vinhedo",
    "consultoria tecnologia Jundiaí",
    "sistema de gestão empresarial",
    "aplicativo para empresas",
    "desenvolvimento web Jundiaí",
    "API inteligência artificial",
    "gateway de pagamento",
    "sistema PDV restaurante",
    "ERP Jundiaí",
    "sistema comanda eletrônica",
  ],
  authors: [{ name: "Kore Nexus", url: "https://knexus.qzz.io" }],
  creator: "Kore Nexus",
  publisher: "Kore Nexus",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://knexus.qzz.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://knexus.qzz.io",
    siteName: "Kore Nexus",
    title: "Kore Nexus | Ecossistema Tecnológico Inteligente para Empresas",
    description:
      "Sistemas sob medida, automações corporativas e ferramentas inteligentes de alta performance. Desenvolvimento de software em Jundiaí e região.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kore Nexus - Ecossistema Tecnológico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kore Nexus | Fábrica de Software em Jundiaí",
    description:
      "Desenvolvimento de sistemas, criação de aplicativos e automação comercial para empresas de Jundiaí, Campinas e região.",
    images: ["/og-image.png"],
  },
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
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    // Adicione suas verificações aqui
    // google: "seu-código-google",
    // yandex: "seu-código-yandex",
  },
  category: "technology",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <head>
        {/* Schema.org JSON-LD para SEO Local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Kore Nexus",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "BRL",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "150",
              },
              author: {
                "@type": "Organization",
                name: "Kore Nexus",
                url: "https://knexus.qzz.io",
                logo: "https://knexus.qzz.io/logo.png",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Jundiaí",
                  addressRegion: "SP",
                  addressCountry: "BR",
                },
                areaServed: [
                  "Jundiaí",
                  "Campinas",
                  "Louveira",
                  "Itupeva",
                  "Vinhedo",
                  "Valinhos",
                  "Itatiba",
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+55-11-98938-7263",
                  email: "Ohany@knexus.qzz.io",
                  contactType: "sales",
                  availableLanguage: "Portuguese",
                },
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
