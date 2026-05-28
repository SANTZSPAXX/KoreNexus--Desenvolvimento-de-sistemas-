"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Zap, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "5511989387263"
const WHATSAPP_PROJECT_MESSAGE = "Ola! Gostaria de solicitar um projeto customizado"
const WHATSAPP_PROJECT_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_PROJECT_MESSAGE)}`

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20">
      {/* Decorative Gradient Overlays */}
      <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-purple-400/20 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-2"
        >
          <Sparkles className="h-4 w-4 text-purple-600" />
          <span className="text-sm font-medium text-gray-700">
            Ecossistema Tecnologico de Alta Performance
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="text-gray-900">Kore Nexus:</span>{" "}
          <span className="brand-gradient-text">
            O Ecossistema Tecnologico Inteligente
          </span>{" "}
          <span className="text-gray-900">para Dominar o Mercado.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mb-10 max-w-3xl text-pretty text-lg text-gray-600 sm:text-xl"
        >
          Sistemas sob medida, automacoes corporativas, clones de grandes plataformas e
          ferramentas inteligentes de alta performance. Centralizados em uma infraestrutura
          ultra veloz e segura para acelerar o seu negocio em{" "}
          <span className="font-semibold text-purple-600">Jundiai e regiao</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="group relative h-14 overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 px-8 text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
          >
            <a href="#produtos">
              <Zap className="mr-2 h-5 w-5" />
              Explorar Ecossistema
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 border-purple-300 bg-white/80 px-8 text-lg font-semibold text-purple-700 backdrop-blur-sm transition-all duration-300 hover:border-purple-500 hover:bg-purple-50"
          >
            <a
              href={WHATSAPP_PROJECT_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Solicitar Projeto Customizado
            </a>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8"
        >
          {[
            { value: "26+", label: "Sistemas Integrados" },
            { value: "99.9%", label: "Uptime Garantido" },
            { value: "50ms", label: "Latencia Media" },
            { value: "24/7", label: "Suporte Tecnico" },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass-card flex flex-col items-center rounded-xl p-4"
            >
              <span className="brand-gradient-text text-3xl font-bold sm:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 text-sm text-gray-500">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-purple-300 bg-white/50 p-1 backdrop-blur-sm"
        >
          <div className="h-2 w-1 rounded-full bg-gradient-to-b from-purple-600 to-blue-600" />
        </motion.div>
      </motion.div>
    </section>
  )
}
