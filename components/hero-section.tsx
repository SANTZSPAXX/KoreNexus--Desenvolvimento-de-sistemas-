"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20">
      {/* Decorative Elements */}
      <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-red-600/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-red-800/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-600/30 bg-red-950/30 px-4 py-2 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-red-500" />
          <span className="text-sm font-medium text-red-300">
            Ecossistema Tecnológico de Alta Performance
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="text-white">Kore Nexus:</span>{" "}
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-500 bg-clip-text text-transparent">
            O Ecossistema Tecnológico Inteligente
          </span>{" "}
          <span className="text-white">para Dominar o Mercado.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mb-10 max-w-3xl text-pretty text-lg text-gray-400 sm:text-xl"
        >
          Sistemas sob medida, automações corporativas, clones de grandes plataformas e
          ferramentas inteligentes de alta performance. Centralizados em uma infraestrutura
          ultra veloz e segura para acelerar o seu negócio em{" "}
          <span className="font-semibold text-red-400">Jundiaí e região</span>.
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
            className="group relative h-14 overflow-hidden bg-gradient-to-r from-red-600 to-red-700 px-8 text-lg font-semibold text-white transition-all duration-300 hover:from-red-500 hover:to-red-600 hover:shadow-[0_0_40px_rgba(255,0,0,0.5)]"
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
            className="h-14 border-red-600/50 bg-transparent px-8 text-lg font-semibold text-white transition-all duration-300 hover:border-red-500 hover:bg-red-950/30 hover:text-white"
          >
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um projeto customizado"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Projeto Customizado
            </a>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {[
            { value: "26+", label: "Sistemas Integrados" },
            { value: "99.9%", label: "Uptime Garantido" },
            { value: "50ms", label: "Latência Média" },
            { value: "24/7", label: "Suporte Técnico" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-xl border border-red-900/30 bg-black/30 p-4 backdrop-blur-sm"
            >
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
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
          className="flex h-10 w-6 items-start justify-center rounded-full border border-red-600/50 p-1"
        >
          <div className="h-2 w-1 rounded-full bg-red-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}
