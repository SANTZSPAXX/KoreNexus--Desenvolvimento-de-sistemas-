import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import { getProductBySlug, getAllProductSlugs, products } from "@/lib/products-data"
import { Button } from "@/components/ui/button"
import { NeuralNetworkBackground } from "@/components/neural-network-background"

/**
 * PAGINAS DINAMICAS PARA SEO
 * Cada ferramenta tem sua propria pagina com URL amigavel
 * Isso melhora a indexacao do Google e permite sitelinks
 */

// Gera todas as rotas estaticas para os produtos
export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }))
}

// Gera metadata dinamica para SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: "Ferramenta nao encontrada",
    }
  }

  const title = `${product.name} - ${product.tag} | Kore Nexus Jundiai`
  const description = `${product.longDescription.slice(0, 155)}...`

  return {
    title,
    description,
    keywords: [
      ...product.keywords,
      "kore nexus",
      "software jundiai",
      "tecnologia campinas",
      "sistemas sp",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "pt_BR",
      siteName: "Kore Nexus",
      url: `https://knexus.qzz.io/ferramentas/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `/ferramentas/${slug}`,
    },
  }
}

export default async function FerramentaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const Icon = product.icon
  const relatedProducts = products
    .filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug)
    .slice(0, 3)

  const whatsappLink = `https://wa.me/5511989387263?text=${encodeURIComponent(
    `Ola! Tenho interesse no sistema ${product.name} da Kore Nexus. Gostaria de mais informacoes.`
  )}`

  return (
    <>
      <NeuralNetworkBackground />
      
      <main className="relative z-10 min-h-screen">
        {/* Header com navegacao */}
        <header className="glass-strong sticky top-0 z-50 border-b border-gray-200/50">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
            <Link
              href="/#produtos"
              className="flex items-center gap-2 text-gray-600 transition-colors hover:text-purple-600"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao Hub
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo-korenexus.png" alt="Kore Nexus" className="h-8 w-auto" />
            </Link>
          </div>
        </header>

        {/* Hero da Ferramenta */}
        <section className="px-4 py-16 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="glass-card rounded-2xl p-8 lg:p-12">
              {/* Tag e Categoria */}
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-1 text-sm font-medium text-white">
                  {product.tag}
                </span>
                <span className="rounded-full border border-gray-200 bg-white/50 px-4 py-1 text-sm text-gray-600">
                  {product.category}
                </span>
              </div>

              {/* Icon e Nome */}
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg shadow-purple-200">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 lg:text-4xl">{product.name}</h1>
              </div>

              {/* Descricao Curta */}
              <p className="mb-6 text-lg text-gray-600">{product.description}</p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-200 hover:shadow-xl"
                >
                  <a href={product.url} target="_blank" rel="noopener noreferrer">
                    Acessar {product.name}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Falar com Consultor
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Descricao Completa */}
        <section className="px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="glass-card rounded-2xl p-8 lg:p-12">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Sobre o {product.name}</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="leading-relaxed">{product.longDescription}</p>
              </div>

              {/* Keywords para SEO */}
              <div className="mt-8 border-t border-gray-200 pt-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Palavras-chave
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Produtos Relacionados */}
        {relatedProducts.length > 0 && (
          <section className="px-4 py-12">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
                Outras Ferramentas de {product.category}
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {relatedProducts.map((related) => {
                  const RelatedIcon = related.icon
                  return (
                    <Link
                      key={related.slug}
                      href={`/ferramentas/${related.slug}`}
                      className="glass-card rounded-xl p-6 transition-all hover:shadow-lg"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-100 to-blue-100">
                        <RelatedIcon className="h-5 w-5 text-purple-600" />
                      </div>
                      <h3 className="mb-2 font-semibold text-gray-900">{related.name}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{related.description}</p>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* CTA Final */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="glass-card rounded-2xl bg-gradient-to-r from-purple-600/10 to-blue-600/10 p-8 text-center lg:p-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 lg:text-3xl">
                Precisa de uma Solucao Personalizada?
              </h2>
              <p className="mb-8 text-gray-600">
                A Kore Nexus desenvolve sistemas sob medida para empresas de Jundiai, Campinas e
                regiao. Fale com nossos consultores.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp: (11) 98938-7263
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="mailto:Ohany@knexus.qzz.io">
                    <Mail className="mr-2 h-4 w-4" />
                    Ohany@knexus.qzz.io
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Schema.org JSON-LD para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: product.name,
              description: product.description,
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              url: product.url,
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "BRL",
              },
              author: {
                "@type": "Organization",
                name: "Kore Nexus",
                url: "https://knexus.qzz.io",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Jundiai",
                  addressRegion: "SP",
                  addressCountry: "BR",
                },
              },
            }),
          }}
        />
      </main>
    </>
  )
}
