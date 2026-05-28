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
    name: "Industria",
    description:
      "Automacao de processos produtivos, controle de qualidade e integracao com sistemas ERP.",
  },
  {
    icon: Truck,
    name: "Logistica",
    description:
      "Rastreamento de frotas, gestao de rotas e otimizacao de entregas em tempo real.",
  },
  {
    icon: ShoppingCart,
    name: "Comercio",
    description:
      "PDV inteligente, controle de estoque e experiencia omnichannel para seu varejo.",
  },
  {
    icon: Building2,
    name: "Servicos",
    description:
      "Agendamento, CRM e automacoes para empresas de servicos e consultorias.",
  },
]

const benefits = [
  "Desenvolvimento agil com entregas semanais",
  "Suporte tecnico dedicado 24/7",
  "Conformidade com LGPD e regulamentacoes",
  "Integracao com sistemas legados",
  "Treinamento completo para equipes",
  "Infraestrutura hospedada em territorio nacional",
]

const cities = [
  "Jundiai",
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
          <span className="mb-4 inline-block rounded-full glass px-4 py-1 text-sm font-medium text-purple-700">
            Sobre a Kore Nexus
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Solucoes Tecnologicas para{" "}
            <span className="brand-gradient-text">
              Jundiai e Regiao
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-pretty text-gray-600">
            A Kore Nexus e uma fabrica de software especializada em desenvolver solucoes
            ageis e personalizadas para os setores de Logistica, Industria, Comercio e
            Servicos. Atendemos empresas de todos os portes na regiao metropolitana de
            Campinas e interior de Sao Paulo.
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
              className="group glass-card rounded-xl p-6"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50 transition-all duration-300 group-hover:border-purple-400 group-hover:shadow-lg group-hover:shadow-purple-100">
                <sector.icon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">{sector.name}</h3>
              <p className="text-sm text-gray-600">{sector.description}</p>
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
            className="glass-card rounded-2xl p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
                <Shield className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Seguranca & Conformidade
              </h3>
            </div>
            <ul className="space-y-3">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-purple-600" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-2 border-t border-gray-100 pt-6">
              <Scale className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-gray-600">
                Em conformidade com a Lei Geral de Protecao de Dados (LGPD)
              </span>
            </div>
          </motion.div>

          {/* Local SEO - Cities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
                <MapPin className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Area de Atuacao</h3>
            </div>
            <p className="mb-6 text-gray-600">
              Desenvolvimento de sistemas em Jundiai e criacao de aplicativos para empresas
              de toda a regiao metropolitana de Campinas. Softwares para empresas de SP
              com foco em inovacao e resultados.
            </p>
            <div className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1 rounded-full border border-purple-200 bg-purple-50 px-3 py-1.5 text-sm text-gray-700"
                >
                  <MapPin className="h-3 w-3 text-purple-600" />
                  {city}
                </span>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50 p-4">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-purple-700">
                  Fabrica de software em Jundiai
                </span>{" "}
                - Atendemos presencialmente empresas da regiao e remotamente todo o Brasil.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
