"use client"

import { motion } from "framer-motion"
import { Zap, Brain, Layers, Server, Shield, Globe } from "lucide-react"

const pillars = [
  {
    icon: Zap,
    title: "Ultra Velocidade",
    description:
      "Arquitetura otimizada em edge computing para carregamento instantâneo. Servidores distribuídos globalmente garantem latência mínima em qualquer localização.",
    stats: "< 50ms",
    statsLabel: "Tempo de Resposta",
  },
  {
    icon: Brain,
    title: "Inteligência Conectada",
    description:
      "Barramento e API de IA proprietária K-Flow integrando todas as ferramentas. Machine learning aplicado para otimização contínua dos processos.",
    stats: "AI-First",
    statsLabel: "Arquitetura",
  },
  {
    icon: Layers,
    title: "Ecossistema Centralizado",
    description:
      "Gerenciamento inteligente de múltiplos microsserviços e utilitários em um único ecossistema integrado. Deploy e escala automáticos.",
    stats: "26+",
    statsLabel: "Sistemas Integrados",
  },
]

const features = [
  { icon: Server, label: "Infraestrutura Dedicada" },
  { icon: Shield, label: "Segurança Empresarial" },
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
          <span className="mb-4 inline-block rounded-full border border-red-600/30 bg-red-950/30 px-4 py-1 text-sm font-medium text-red-400">
            Infraestrutura & Performance
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            A Essência Tecnológica da{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Kore Nexus
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-gray-400">
            Uma fundação tecnológica robusta que sustenta todo o ecossistema, garantindo
            performance, segurança e escalabilidade para operações críticas.
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
              className="group relative overflow-hidden rounded-2xl border border-red-900/30 bg-gradient-to-b from-red-950/20 to-black/50 p-8 backdrop-blur-sm transition-all duration-500 hover:border-red-600/50 hover:shadow-[0_0_40px_rgba(255,0,0,0.15)]"
            >
              {/* Glow Effect */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-600/10 blur-3xl transition-all duration-500 group-hover:bg-red-600/20" />

              {/* Icon */}
              <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-red-600/30 bg-red-950/50 transition-all duration-300 group-hover:border-red-500 group-hover:shadow-[0_0_20px_rgba(255,0,0,0.3)]">
                <pillar.icon className="h-7 w-7 text-red-500" />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-bold text-white">{pillar.title}</h3>
              <p className="mb-6 text-gray-400">{pillar.description}</p>

              {/* Stats */}
              <div className="flex items-center gap-3 border-t border-red-900/30 pt-6">
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-2xl font-bold text-transparent">
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
          className="flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-red-900/30 bg-red-950/10 p-6 backdrop-blur-sm"
        >
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-300">
              <feature.icon className="h-5 w-5 text-red-500" />
              <span className="text-sm font-medium">{feature.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
