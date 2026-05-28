import { MetadataRoute } from "next"

/**
 * ROBOTS.TXT CONFIGURATION
 * 
 * Este arquivo configura as regras de crawling para os mecanismos de busca
 * 
 * Palavras-chave focadas para indexação:
 * - "Desenvolvimento de sistemas em Jundiaí"
 * - "Criação de aplicativos Jundiaí"
 * - "Softwares para empresas SP"
 * - "Fábrica de software Jundiaí"
 * 
 * Para testar: acesse /robots.txt após o deploy
 */

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://knexus.qzz.io"

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/private/",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
