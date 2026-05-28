"use client"

import { motion } from "framer-motion"
import {
  Building2,
  Factory,
  ShoppingCart,
  Truck,
  Shield,
  Scale,
  MapPin,
  CheckCircle2,
} from "lucide-react"

const sectors = [
  {
    icon: Factory,
    name: "Indústria",
    description:
      "Automação de processos produtivos, controle de qualidade e integração com sistemas ERP.",
  },
  {
    icon: Truck,
    name: "Logística",
    description:
      "Rastreamento de frotas, gestão de rotas e otimização de entregas em tempo real.",
  },
  {
    icon: ShoppingCart,
    name: "Comércio",
    description:
      "PDV inteligente, controle de estoque e experiência omnichannel para seu varejo.",
  },
  {
    icon: Building2,
    name: "Serviços",
    description:
      "Agendamento, CRM e automações para empresas de serviços e consultorias.",
  },
]

const benefits = [
  "Desenvolvimento ágil com entregas semanais",
  "Suporte técnico dedicado 24/7",
  "Conformidade com LGPD e regulamentações",
  "Integração com sistemas legados",
  "Treinamento completo para equipes",
  "Infraestrutura hospedada em território nacional",
]

const cities = [
  "Jundiaí",
  "Campinas",
  "Louveira",
  "Itupeva",
  "Vinhedo",
  "Valinhos",
  "Itatiba",
  "Campo Limpo Paulista",
]

export function InstitutionalSection() {
  return (
    <section id="institucional" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-red-600/30 bg-red-950/30 px-4 py-1 text-sm font-medium text-red-400">
            Sobre a Kore Nexus
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Soluções Tecnológicas para{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Jundiaí e Região
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-pretty text-gray-400">
            A Kore Nexus é uma fábrica de software especializada em desenvolver soluções
            ágeis e personalizadas para os setores de Logística, Indústria, Comércio e
            Serviços. Atendemos empresas de todos os portes na região metropolitana de
            Campinas e interior de São Paulo.
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl border border-red-900/30 bg-gradient-to-b from-red-950/10 to-black/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-red-600/50"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-red-600/30 bg-red-950/30 transition-all duration-300 group-hover:border-red-500 group-hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]">
                <sector.icon className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{sector.name}</h3>
              <p className="text-sm text-gray-400">{sector.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-red-900/30 bg-gradient-to-b from-red-950/10 to-black/50 p-8 backdrop-blur-sm"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-red-600/30 bg-red-950/30">
                <Shield className="h-5 w-5 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Segurança & Conformidade
              </h3>
            </div>
            <ul className="space-y-3">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-2 border-t border-red-900/30 pt-6">
              <Scale className="h-5 w-5 text-red-500" />
              <span className="text-sm text-gray-400">
                Em conformidade com a Lei Geral de Proteção de Dados (LGPD)
              </span>
            </div>
          </motion.div>

          {/* Local SEO - Cities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-red-900/30 bg-gradient-to-b from-red-950/10 to-black/50 p-8 backdrop-blur-sm"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-red-600/30 bg-red-950/30">
                <MapPin className="h-5 w-5 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Área de Atuação</h3>
            </div>
            <p className="mb-6 text-gray-400">
              Desenvolvimento de sistemas em Jundiaí e criação de aplicativos para empresas
              de toda a região metropolitana de Campinas. Softwares para empresas de SP
              com foco em inovação e resultados.
            </p>
            <div className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1 rounded-full border border-red-600/30 bg-red-950/30 px-3 py-1.5 text-sm text-gray-300"
                >
                  <MapPin className="h-3 w-3 text-red-500" />
                  {city}
                </span>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-red-600/30 bg-red-950/20 p-4">
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-red-400">
                  Fábrica de software em Jundiaí
                </span>{" "}
                - Atendemos presencialmente empresas da região e remotamente todo o Brasil.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
