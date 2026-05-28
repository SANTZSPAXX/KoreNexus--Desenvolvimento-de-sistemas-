"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, MessageCircle, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#produtividade", label: "Produtividade" },
  { href: "#comunicacao", label: "Comunicação & IA" },
  { href: "#automacao", label: "Automação Comercial" },
  { href: "#utilitarios", label: "Utilitários" },
  { href: "#institucional", label: "Sobre Nós" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-red-900/30 bg-black/80 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-red-600/50 bg-gradient-to-br from-red-900/50 to-black transition-all duration-300 group-hover:border-red-500 group-hover:shadow-[0_0_20px_rgba(255,0,0,0.4)]">
            <Zap className="h-5 w-5 text-red-500 transition-colors group-hover:text-red-400" />
          </div>
          <span className="bg-gradient-to-r from-white via-red-200 to-red-500 bg-clip-text text-xl font-bold tracking-tight text-transparent">
            Kore Nexus
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-red-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button
            asChild
            className="group relative overflow-hidden border border-red-600 bg-red-600/20 text-white transition-all duration-300 hover:bg-red-600 hover:shadow-[0_0_30px_rgba(255,0,0,0.5)]"
          >
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre a Kore Nexus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Falar com Consultor
              <span className="absolute inset-0 -z-10 bg-gradient-to-r from-red-600 to-red-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-red-900/50 p-2 text-gray-300 transition-colors hover:bg-red-900/20 hover:text-white lg:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-red-900/30 bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-2 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 text-gray-300 transition-colors hover:bg-red-900/20 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-2 w-full border border-red-600 bg-red-600/20 text-white hover:bg-red-600"
              >
                <a
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre a Kore Nexus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Falar com Consultor
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
