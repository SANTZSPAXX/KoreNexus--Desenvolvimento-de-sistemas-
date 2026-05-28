"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, MessageCircle, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#produtividade", label: "Produtividade" },
  { href: "#comunicacao", label: "Comunicacao & IA" },
  { href: "#automacao", label: "Automacao Comercial" },
  { href: "#utilitarios", label: "Utilitarios" },
  { href: "#institucional", label: "Sobre Nos" },
]

const WHATSAPP_NUMBER = "5511989387263"
const WHATSAPP_MESSAGE = "Ola! Gostaria de saber mais sobre a Kore Nexus"
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 glass-strong"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <Image
            src="/logo-korenexus.png"
            alt="Kore Nexus - Desenvolvimento de Software sob Medida"
            width={180}
            height={50}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Contact Info + CTA Button */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+5511989387263"
            className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-purple-600"
          >
            <Phone className="h-4 w-4" />
            <span>(11) 98938-7263</span>
          </a>
          <Button
            asChild
            className="group relative overflow-hidden border-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Falar com Consultor
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-gray-200 bg-white/80 p-2 text-gray-700 transition-colors hover:bg-gray-100 lg:hidden"
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
            className="border-t border-gray-200 glass-strong lg:hidden"
          >
            <div className="flex flex-col gap-2 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-purple-50 hover:text-purple-700"
                >
                  {link.label}
                </Link>
              ))}
              {/* Mobile Contact Info */}
              <div className="mt-2 flex flex-col gap-2 border-t border-gray-200 pt-4">
                <a
                  href="tel:+5511989387263"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-50"
                >
                  <Phone className="h-4 w-4 text-purple-600" />
                  (11) 98938-7263
                </a>
                <a
                  href="mailto:Ohany@knexus.qzz.io"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-50"
                >
                  <Mail className="h-4 w-4 text-purple-600" />
                  Ohany@knexus.qzz.io
                </a>
              </div>
              <Button
                asChild
                className="mt-2 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white"
              >
                <a
                  href={WHATSAPP_LINK}
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
