/**
 * PÁGINA PRINCIPAL - KORE NEXUS
 * Landing Page Institucional Premium
 * 
 * Estrutura SEO otimizada:
 * - Tags semânticas HTML5 (<header>, <main>, <section>, <footer>)
 * - Hierarquia de headings (h1, h2, h3) para indexação
 * - Palavras-chave focadas em SEO local para Jundiaí e região
 * 
 * Palavras-chave alvo:
 * - "Desenvolvimento de sistemas em Jundiaí"
 * - "Criação de aplicativos Jundiaí"
 * - "Softwares para empresas SP"
 * - "Fábrica de software Jundiaí"
 */

import { NeuralNetworkBackground } from "@/components/neural-network-background"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { InfrastructureSection } from "@/components/infrastructure-section"
import { ProductsShowcase } from "@/components/products-showcase"
import { InstitutionalSection } from "@/components/institutional-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      {/* Background Animado - Teia Neural Pulsante Vermelha */}
      <NeuralNetworkBackground />

      {/* Conteúdo Principal */}
      <div className="relative z-10">
        {/* Header/Navegação */}
        <Navbar />

        {/* Conteúdo da Página */}
        <main>
          {/* 
            HERO SECTION
            Título principal (h1) com palavras-chave de alta conversão
            CTAs otimizados para geração de leads
          */}
          <HeroSection />

          {/* 
            SEÇÃO DE INFRAESTRUTURA
            Diferenciais técnicos da plataforma
            Pilares: Velocidade, IA, Ecossistema
          */}
          <InfrastructureSection />

          {/* 
            VITRINE DE PRODUTOS
            Hub com todos os 26 sistemas organizados por categoria:
            - Produtividade e Engenharia
            - Comunicação, Marketing e IA
            - Automação Comercial, Food e Finanças
            - Utilitários Web e Conteúdo
          */}
          <ProductsShowcase />

          {/* 
            SEÇÃO INSTITUCIONAL E SEO LOCAL
            Foco em palavras-chave regionais:
            - Jundiaí, Campinas, Louveira, Itupeva, Vinhedo
            Setores: Logística, Indústria, Comércio
          */}
          <InstitutionalSection />
        </main>

        {/* 
          FOOTER COMPLETO
          Sitemap visível, links de contato, direitos autorais
          Palavras-chave de rodapé para SEO
        */}
        <Footer />
      </div>
    </>
  )
}
