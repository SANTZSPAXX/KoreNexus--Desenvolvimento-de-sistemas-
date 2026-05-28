"use client"

import { motion } from "framer-motion"
import { Zap, Brain, Layers, Server, Shield, Globe } from "lucide-react"

const pillars = [
  {
    icon: Zap,
    title: "Ultra Velocidade",
    description:
      "Arquitetura otimizada em edge computing para carregamento instantaneo. Servidores distribuidos globalmente garantem latencia minima em qualquer localizacao.",
    stats: "< 50ms",
    statsLabel: "Tempo de Resposta",
  },
  {
    icon: Brain,
    title: "Inteligencia Conectada",
    description:
      "Barramento e API de IA proprietaria K-Flow integrando todas as ferramentas. Machine learning aplicado para otimizacao continua dos processos.",
    stats: "AI-First",
    statsLabel: "Arquitetura",
  },
  {
    icon: Layers,
    title: "Ecossistema Centralizado",
    description:
      "Gerenciamento inteligente de multiplos microsservicos e utilitarios em um unico ecossistema integrado. Deploy e escala automaticos.",
    stats: "26+",
    statsLabel: "Sistemas Integrados",
  },
]

const features = [
  { icon: Server, label: "Infraestrutura Dedicada" },
  { icon: Shield, label: "Seguranca Empresarial" },
  { icon: Globe, label: "CDN Global" },
]

export function InfrastructureSection() {
  return (
    <section className="relative px-4 py-24">
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
            Infraestrutura & Performance
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            A Essencia Tecnologica da{" "}
            <span className="brand-gradient-text">
              Kore Nexus
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-gray-600">
            Uma fundacao tecnologica robusta que sustenta todo o ecossistema, garantindo
            performance, seguranca e escalabilidade para operacoes criticas.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass-card rounded-2xl p-8"
            >
              {/* Glow Effect */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-400/10 blur-3xl transition-all duration-500 group-hover:bg-purple-400/20" />

              {/* Icon */}
              <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50 transition-all duration-300 group-hover:border-purple-400 group-hover:shadow-lg group-hover:shadow-purple-200">
                <pillar.icon className="h-7 w-7 text-purple-600" />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-bold text-gray-900">{pillar.title}</h3>
              <p className="mb-6 text-gray-600">{pillar.description}</p>

              {/* Stats */}
              <div className="flex items-center gap-3 border-t border-gray-100 pt-6">
                <span className="brand-gradient-text text-2xl font-bold">
                  {pillar.stats}
                </span>
                <span className="text-sm text-gray-500">{pillar.statsLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 rounded-2xl glass p-6"
        >
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-700">
              <feature.icon className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium">{feature.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
