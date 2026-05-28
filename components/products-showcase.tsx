"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ExternalLink,
  Pencil,
  FileSpreadsheet,
  Cpu,
  Brain,
  MessageCircle,
  Link2,
  Mail,
  BarChart3,
  LinkIcon,
  Video,
  CreditCard,
  Wallet,
  UtensilsCrossed,
  Key,
  Calculator,
  TrendingUp,
  Play,
  FileUp,
  Scissors,
  Download,
  FileText,
  IdCard,
  QrCode,
  Calendar,
  GraduationCap,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = [
  { id: "produtividade", label: "Produtividade", icon: Pencil },
  { id: "comunicacao", label: "Comunicação & IA", icon: MessageCircle },
  { id: "automacao", label: "Automação Comercial", icon: CreditCard },
  { id: "utilitarios", label: "Utilitários Web", icon: LinkIcon },
]

const products = {
  produtividade: [
    {
      name: "KCad",
      description: "Cópia do AutoCAD de alta performance integrada ao navegador. Projete, edite e visualize desenhos técnicos sem instalação.",
      url: "https://korecad.lovable.app/",
      icon: Pencil,
      tag: "CAD Web",
    },
    {
      name: "KSheets",
      description: "Cópia do Excel Online para gestão robusta de dados e planilhas. Fórmulas avançadas, gráficos e colaboração em tempo real.",
      url: "https://excelonlinekorenexus.lovable.app/",
      icon: FileSpreadsheet,
      tag: "Planilhas",
    },
    {
      name: "Circuit Nexus Forge",
      description: "Aplicativo avançado para simulação e teste de placas de circuito. Design eletrônico profissional na nuvem.",
      url: "https://circuit-nexus-forge.lovable.app/",
      icon: Cpu,
      tag: "Eletrônica",
    },
  ],
  comunicacao: [
    {
      name: "K-Flow Nexus",
      description: "Nossa API proprietária de Inteligência Artificial e fluxo de dados. O cérebro que conecta todo o ecossistema.",
      url: "https://k-flow-nexus.lovable.app/",
      icon: Brain,
      tag: "API IA",
      featured: true,
    },
    {
      name: "KZap",
      description: "Cópia do WhatsApp para comunicação ágil e integrada. Mensagens instantâneas corporativas com segurança.",
      url: "https://koremsm.lovable.app/",
      icon: MessageCircle,
      tag: "Mensageria",
    },
    {
      name: "ZapKlink",
      description: "Gerador profissional de Links direcionados para WhatsApp. Crie links rastreáveis e otimizados para conversão.",
      url: "https://gerarlinkzap.lovable.app/",
      icon: Link2,
      tag: "Conversão",
    },
    {
      name: "KCold",
      description: "Sistema avançado para automação e disparos de Cold Mail / Email marketing. Sequências inteligentes e analytics.",
      url: "https://nexus-mail-bliss.lovable.app/",
      icon: Mail,
      tag: "Email Marketing",
    },
    {
      name: "KAds",
      description: "Cópia do Google Ads para simulação, gestão de tráfego e campanhas. Domine a mídia paga com precisão.",
      url: "https://adskore.lovable.app/",
      icon: BarChart3,
      tag: "Tráfego Pago",
    },
    {
      name: "KBio",
      description: "Link na Bio unificado e estilizado para redes sociais. Centralize todos os seus links com design profissional.",
      url: "https://linknabiokn.lovable.app/",
      icon: LinkIcon,
      tag: "Social Media",
    },
    {
      name: "KLive",
      description: "Chat em tempo real e comunicação por vídeo inspirado no Omegle. Conecte pessoas de forma segura e instantânea.",
      url: "https://omeaglechat.lovable.app/",
      icon: Video,
      tag: "Video Chat",
    },
  ],
  automacao: [
    {
      name: "KCard",
      description: "Sistema de comanda por cartão com Gateway de Pagamento Integrado. Controle total do consumo em tempo real.",
      url: "https://saldocertokn.lovable.app/",
      icon: CreditCard,
      tag: "PDV",
    },
    {
      name: "KPay",
      description: "Nosso gateway de pagamento seguro, estável e de alta velocidade. PIX, cartão e boleto em uma única API.",
      url: "https://gatewaypag.lovable.app/",
      icon: Wallet,
      tag: "Pagamentos",
      featured: true,
    },
    {
      name: "KMesa",
      description: "Sistema inteligente de comanda por mesa para restaurantes e bares. Gestão completa do atendimento.",
      url: "https://comanda-magica-calc.lovable.app/",
      icon: UtensilsCrossed,
      tag: "Food Service",
    },
    {
      name: "Sector Key Pal",
      description: "Sistema automatizado de controle de chaves, portaria e acessos. Segurança patrimonial inteligente.",
      url: "https://sector-key-pal.lovable.app/",
      icon: Key,
      tag: "Controle de Acesso",
    },
    {
      name: "KHelp",
      description: "Calculadora financeira empresarial para custos de terceirização e contratação de sistemas.",
      url: "https://calculadorafinacasempresa.lovable.app/",
      icon: Calculator,
      tag: "Finanças",
    },
    {
      name: "KRoi",
      description: "Calculadora avançada de Retorno Sobre Investimento (ROI) para novos negócios. Tome decisões baseadas em dados.",
      url: "https://calcularinvestimento.lovable.app/",
      icon: TrendingUp,
      tag: "Investimentos",
    },
  ],
  utilitarios: [
    {
      name: "KPlay",
      description: "Cópia do YouTube totalmente sem anúncios, otimizada para abrir até em redes Wi-Fi bloqueadas.",
      url: "https://knvd.lovable.app/",
      icon: Play,
      tag: "Streaming",
      featured: true,
    },
    {
      name: "KTemp",
      description: "Transferência de arquivos temporários seguros com link de autodestruição. Compartilhe com confiança.",
      url: "https://arquivotemp.lovable.app/",
      icon: FileUp,
      tag: "Transferência",
    },
    {
      name: "KLink",
      description: "Encurtador de links inteligente com foco em rastreamento e analytics. URLs curtas com insights poderosos.",
      url: "https://encurtadorlink.lovable.app/",
      icon: Scissors,
      tag: "URL Shortener",
    },
    {
      name: "KTok",
      description: "Plataforma rápida para baixar vídeos do TikTok limpos, sem marca d'água. Download instantâneo.",
      url: "https://baixartiktok.lovable.app/",
      icon: Download,
      tag: "Download",
    },
    {
      name: "KEmprego",
      description: "Gerador automático de currículos profissionais otimizados e gratuitos. Destaque-se no mercado.",
      url: "https://geradorcurriculogratis.lovable.app/",
      icon: FileText,
      tag: "Carreira",
    },
    {
      name: "Gerador de Cartão de Visita",
      description: "Criação instantânea de identidade visual corporativa. Design profissional em segundos.",
      url: "https://geradordecartaodevisitas.lovable.app/",
      icon: IdCard,
      tag: "Design",
    },
    {
      name: "KCode",
      description: "Gerador dinâmico de QR Codes customizáveis. Cores, logos e formatos personalizados.",
      url: "https://gerarqrcodej.lovable.app/",
      icon: QrCode,
      tag: "QR Code",
    },
    {
      name: "KAgenda",
      description: "Cópia inteligente do Agenda Fácil/AgendaTempo para marcação de horários. Agendamento online simplificado.",
      url: "https://kagenda.lovable.app/",
      icon: Calendar,
      tag: "Agendamento",
    },
    {
      name: "K_Cursos",
      description: "Plataforma completa para hospedagem de infoprodutos e cursos online. Venda conhecimento com facilidade.",
      url: "https://learn-bright-certify.lovable.app/",
      icon: GraduationCap,
      tag: "Infoprodutos",
    },
    {
      name: "Trabalhe Conosco",
      description: "Canal direto de recrutamento e banco de talentos da Kore Nexus. Junte-se à revolução tecnológica.",
      url: "https://trabalheconoscokn.lovable.app/",
      icon: Briefcase,
      tag: "Carreiras",
    },
  ],
}

function ProductCard({
  product,
  index,
}: {
  product: (typeof products.produtividade)[0]
  index: number
}) {
  const Icon = product.icon

  return (
    <motion.a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-red-900/30 bg-gradient-to-b from-red-950/10 to-black/50 p-6 backdrop-blur-sm transition-all duration-500",
        "hover:border-red-500 hover:shadow-[0_0_30px_rgba(255,0,0,0.2)]",
        "product" in product && (product as { featured?: boolean }).featured &&
          "border-red-600/50 md:col-span-2"
      )}
    >
      {/* Glow Effect */}
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-red-600/0 blur-2xl transition-all duration-500 group-hover:bg-red-600/20" />

      {/* Tag */}
      <span className="mb-4 inline-flex w-fit rounded-full border border-red-600/30 bg-red-950/50 px-3 py-1 text-xs font-medium text-red-400">
        {product.tag}
      </span>

      {/* Icon & Title */}
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-red-600/30 bg-red-950/30 transition-all duration-300 group-hover:border-red-500 group-hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]">
          <Icon className="h-5 w-5 text-red-500" />
        </div>
        <h3 className="text-lg font-bold text-white">{product.name}</h3>
      </div>

      {/* Description */}
      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400">
        {product.description}
      </p>

      {/* Link */}
      <div className="flex items-center gap-2 text-sm font-medium text-red-400 transition-colors group-hover:text-red-300">
        Acessar Sistema
        <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </motion.a>
  )
}

export function ProductsShowcase() {
  const [activeCategory, setActiveCategory] = useState("produtividade")

  return (
    <section id="produtos" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-red-600/30 bg-red-950/30 px-4 py-1 text-sm font-medium text-red-400">
            Hub de Produtos
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            O Ecossistema Kore Nexus
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-gray-400">
            26+ sistemas integrados para transformar a operação do seu negócio. Escolha a
            categoria e explore nossas soluções de alta performance.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 flex flex-wrap justify-center gap-3"
        >
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <Button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                variant={activeCategory === cat.id ? "default" : "outline"}
                className={cn(
                  "h-auto px-5 py-3 transition-all duration-300",
                  activeCategory === cat.id
                    ? "border-red-500 bg-red-600 text-white shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:bg-red-500"
                    : "border-red-900/50 bg-transparent text-gray-300 hover:border-red-600 hover:bg-red-950/30 hover:text-white"
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                {cat.label}
              </Button>
            )
          })}
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            id={activeCategory}
          >
            {products[activeCategory as keyof typeof products].map((product, i) => (
              <ProductCard key={product.name} product={product} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
