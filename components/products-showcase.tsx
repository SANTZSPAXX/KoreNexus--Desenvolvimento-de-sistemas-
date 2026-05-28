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
  { id: "comunicacao", label: "Comunicacao & IA", icon: MessageCircle },
  { id: "automacao", label: "Automacao Comercial", icon: CreditCard },
  { id: "utilitarios", label: "Utilitarios Web", icon: LinkIcon },
]

const products = {
  produtividade: [
    {
      name: "KCad",
      description: "Copia do AutoCAD de alta performance integrada ao navegador. Projete, edite e visualize desenhos tecnicos sem instalacao.",
      url: "https://korecad.lovable.app/",
      icon: Pencil,
      tag: "CAD Web",
    },
    {
      name: "KSheets",
      description: "Copia do Excel Online para gestao robusta de dados e planilhas. Formulas avancadas, graficos e colaboracao em tempo real.",
      url: "https://excelonlinekorenexus.lovable.app/",
      icon: FileSpreadsheet,
      tag: "Planilhas",
    },
    {
      name: "Circuit Nexus Forge",
      description: "Aplicativo avancado para simulacao e teste de placas de circuito. Design eletronico profissional na nuvem.",
      url: "https://circuit-nexus-forge.lovable.app/",
      icon: Cpu,
      tag: "Eletronica",
    },
  ],
  comunicacao: [
    {
      name: "K-Flow Nexus",
      description: "Nossa API proprietaria de Inteligencia Artificial e fluxo de dados. O cerebro que conecta todo o ecossistema.",
      url: "https://k-flow-nexus.lovable.app/",
      icon: Brain,
      tag: "API IA",
      featured: true,
    },
    {
      name: "KZap",
      description: "Copia do WhatsApp para comunicacao agil e integrada. Mensagens instantaneas corporativas com seguranca.",
      url: "https://koremsm.lovable.app/",
      icon: MessageCircle,
      tag: "Mensageria",
    },
    {
      name: "ZapKlink",
      description: "Gerador profissional de Links direcionados para WhatsApp. Crie links rastreaveis e otimizados para conversao.",
      url: "https://gerarlinkzap.lovable.app/",
      icon: Link2,
      tag: "Conversao",
    },
    {
      name: "KCold",
      description: "Sistema avancado para automacao e disparos de Cold Mail / Email marketing. Sequencias inteligentes e analytics.",
      url: "https://nexus-mail-bliss.lovable.app/",
      icon: Mail,
      tag: "Email Marketing",
    },
    {
      name: "KAds",
      description: "Copia do Google Ads para simulacao, gestao de trafego e campanhas. Domine a midia paga com precisao.",
      url: "https://adskore.lovable.app/",
      icon: BarChart3,
      tag: "Trafego Pago",
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
      description: "Chat em tempo real e comunicacao por video inspirado no Omegle. Conecte pessoas de forma segura e instantanea.",
      url: "https://omeaglechat.lovable.app/",
      icon: Video,
      tag: "Video Chat",
    },
  ],
  automacao: [
    {
      name: "KCard",
      description: "Sistema de comanda por cartao com Gateway de Pagamento Integrado. Controle total do consumo em tempo real.",
      url: "https://saldocertokn.lovable.app/",
      icon: CreditCard,
      tag: "PDV",
    },
    {
      name: "KPay",
      description: "Nosso gateway de pagamento seguro, estavel e de alta velocidade. PIX, cartao e boleto em uma unica API.",
      url: "https://gatewaypag.lovable.app/",
      icon: Wallet,
      tag: "Pagamentos",
      featured: true,
    },
    {
      name: "KMesa",
      description: "Sistema inteligente de comanda por mesa para restaurantes e bares. Gestao completa do atendimento.",
      url: "https://comanda-magica-calc.lovable.app/",
      icon: UtensilsCrossed,
      tag: "Food Service",
    },
    {
      name: "Sector Key Pal",
      description: "Sistema automatizado de controle de chaves, portaria e acessos. Seguranca patrimonial inteligente.",
      url: "https://sector-key-pal.lovable.app/",
      icon: Key,
      tag: "Controle de Acesso",
    },
    {
      name: "KHelp",
      description: "Calculadora financeira empresarial para custos de terceirizacao e contratacao de sistemas.",
      url: "https://calculadorafinacasempresa.lovable.app/",
      icon: Calculator,
      tag: "Financas",
    },
    {
      name: "KRoi",
      description: "Calculadora avancada de Retorno Sobre Investimento (ROI) para novos negocios. Tome decisoes baseadas em dados.",
      url: "https://calcularinvestimento.lovable.app/",
      icon: TrendingUp,
      tag: "Investimentos",
    },
  ],
  utilitarios: [
    {
      name: "KPlay",
      description: "Copia do YouTube totalmente sem anuncios, otimizada para abrir ate em redes Wi-Fi bloqueadas.",
      url: "https://knvd.lovable.app/",
      icon: Play,
      tag: "Streaming",
      featured: true,
    },
    {
      name: "KTemp",
      description: "Transferencia de arquivos temporarios seguros com link de autodestruicao. Compartilhe com confianca.",
      url: "https://arquivotemp.lovable.app/",
      icon: FileUp,
      tag: "Transferencia",
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
      description: "Plataforma rapida para baixar videos do TikTok limpos, sem marca d agua. Download instantaneo.",
      url: "https://baixartiktok.lovable.app/",
      icon: Download,
      tag: "Download",
    },
    {
      name: "KEmprego",
      description: "Gerador automatico de curriculos profissionais otimizados e gratuitos. Destaque-se no mercado.",
      url: "https://geradorcurriculogratis.lovable.app/",
      icon: FileText,
      tag: "Carreira",
    },
    {
      name: "Gerador de Cartao de Visita",
      description: "Criacao instantanea de identidade visual corporativa. Design profissional em segundos.",
      url: "https://geradordecartaodevisitas.lovable.app/",
      icon: IdCard,
      tag: "Design",
    },
    {
      name: "KCode",
      description: "Gerador dinamico de QR Codes customizaveis. Cores, logos e formatos personalizados.",
      url: "https://gerarqrcodej.lovable.app/",
      icon: QrCode,
      tag: "QR Code",
    },
    {
      name: "KAgenda",
      description: "Copia inteligente do Agenda Facil/AgendaTempo para marcacao de horarios. Agendamento online simplificado.",
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
      description: "Canal direto de recrutamento e banco de talentos da Kore Nexus. Junte-se a revolucao tecnologica.",
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
        "group glass-card relative flex flex-col rounded-xl p-6",
        "product" in product && (product as { featured?: boolean }).featured &&
          "border-purple-300 md:col-span-2"
      )}
    >
      {/* Tag */}
      <span className="mb-4 inline-flex w-fit rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
        {product.tag}
      </span>

      {/* Icon & Title */}
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50 transition-all duration-300 group-hover:border-purple-400 group-hover:shadow-lg group-hover:shadow-purple-100">
          <Icon className="h-5 w-5 text-purple-600" />
        </div>
        <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
      </div>

      {/* Description */}
      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">
        {product.description}
      </p>

      {/* Link */}
      <div className="flex items-center gap-2 text-sm font-medium text-purple-600 transition-colors group-hover:text-purple-700">
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
          <span className="mb-4 inline-block rounded-full glass px-4 py-1 text-sm font-medium text-purple-700">
            Hub de Produtos
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            O Ecossistema Kore Nexus
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-gray-600">
            26+ sistemas integrados para transformar a operacao do seu negocio. Escolha a
            categoria e explore nossas solucoes de alta performance.
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
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-300/30"
                    : "border-gray-200 bg-white/80 text-gray-700 hover:border-purple-400 hover:bg-purple-50 hover:text-purple-700"
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
