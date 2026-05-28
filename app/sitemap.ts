import { MetadataRoute } from "next"

/**
 * SITEMAP.XML CONFIGURATION
 * 
 * Este arquivo gera automaticamente o sitemap.xml para SEO
 * Adicione todas as URLs públicas do seu site aqui
 * 
 * Para testar: acesse /sitemap.xml após o deploy
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://knexus.qzz.io"

  // URLs principais do site
  const routes = [
    "",
    "#produtos",
    "#produtividade",
    "#comunicacao",
    "#automacao",
    "#utilitarios",
    "#institucional",
    "#contato",
  ]

  // URLs dos produtos/sistemas
  const products = [
    "https://korecad.lovable.app/",
    "https://excelonlinekorenexus.lovable.app/",
    "https://circuit-nexus-forge.lovable.app/",
    "https://k-flow-nexus.lovable.app/",
    "https://koremsm.lovable.app/",
    "https://gerarlinkzap.lovable.app/",
    "https://nexus-mail-bliss.lovable.app/",
    "https://adskore.lovable.app/",
    "https://linknabiokn.lovable.app/",
    "https://omeaglechat.lovable.app/",
    "https://saldocertokn.lovable.app/",
    "https://gatewaypag.lovable.app/",
    "https://comanda-magica-calc.lovable.app/",
    "https://sector-key-pal.lovable.app/",
    "https://calculadorafinacasempresa.lovable.app/",
    "https://calcularinvestimento.lovable.app/",
    "https://knvd.lovable.app/",
    "https://arquivotemp.lovable.app/",
    "https://encurtadorlink.lovable.app/",
    "https://baixartiktok.lovable.app/",
    "https://geradorcurriculogratis.lovable.app/",
    "https://geradordecartaodevisitas.lovable.app/",
    "https://gerarqrcodej.lovable.app/",
    "https://kagenda.lovable.app/",
    "https://learn-bright-certify.lovable.app/",
    "https://trabalheconoscokn.lovable.app/",
  ]

  const sitemapEntries: MetadataRoute.Sitemap = [
    // Página principal com alta prioridade
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Rotas internas
    ...routes.slice(1).map((route) => ({
      url: `${baseUrl}/${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]

  return sitemapEntries
}
