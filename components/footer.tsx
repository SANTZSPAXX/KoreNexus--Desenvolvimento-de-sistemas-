"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react"

const WHATSAPP_NUMBER = "5511989387263"
const WHATSAPP_MESSAGE = "Ola! Gostaria de saber mais sobre a Kore Nexus"
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/Lk4NGGFALyvx7wLa7?g_st=ac"
const EMAIL = "Ohany@knexus.qzz.io"
const PHONE = "+55 11 98938-7263"
const PHONE_FORMATTED = "(11) 98938-7263"

const footerLinks = {
  produtos: [
    { name: "Produtividade", href: "#produtividade" },
    { name: "Comunicacao & IA", href: "#comunicacao" },
    { name: "Automacao Comercial", href: "#automacao" },
    { name: "Utilitarios Web", href: "#utilitarios" },
  ],
  empresa: [
    { name: "Sobre Nos", href: "#institucional" },
    { name: "Trabalhe Conosco", href: "https://trabalheconoscokn.lovable.app/" },
    { name: "Blog", href: "#" },
    { name: "Contato", href: "#contato" },
  ],
  suporte: [
    { name: "Documentacao", href: "#" },
    { name: "Status do Sistema", href: "#" },
    { name: "Termos de Uso", href: "#" },
    { name: "Politica de Privacidade", href: "#" },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
]

export function Footer() {
  return (
    <footer id="contato" className="relative glass-strong border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/logo-korenexus.png"
                alt="Kore Nexus - Desenvolvimento de Software sob Medida"
                width={160}
                height={45}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-gray-600">
              Fabrica de software em Jundiai especializada em desenvolvimento de sistemas,
              criacao de aplicativos e softwares para empresas de SP.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-purple-600"
              >
                <Mail className="h-4 w-4 text-purple-600" />
                {EMAIL}
              </a>
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-purple-600"
              >
                <Phone className="h-4 w-4 text-purple-600" />
                {PHONE_FORMATTED}
              </a>
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-gray-600 transition-colors hover:text-purple-600"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-purple-600" />
                <span>Jundiai, SP - Brasil</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition-all duration-300 hover:border-purple-400 hover:text-purple-600 hover:shadow-lg hover:shadow-purple-100"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
                {category === "produtos"
                  ? "Produtos"
                  : category === "empresa"
                    ? "Empresa"
                    : "Suporte"}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors hover:text-purple-600"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 rounded-2xl border border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50 p-6 sm:p-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h3 className="mb-1 text-lg font-bold text-gray-900">
                Pronto para transformar seu negocio?
              </h3>
              <p className="text-sm text-gray-600">
                Fale com nossos consultores e descubra a solucao ideal para sua empresa.
              </p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-300/30"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 overflow-hidden rounded-2xl border border-gray-200"
        >
          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-gradient-to-r from-purple-50 to-blue-50 p-4 transition-colors hover:from-purple-100 hover:to-blue-100"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">
                  <MapPin className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Nossa Localizacao</p>
                  <p className="text-sm text-gray-600">Jundiai, SP - Clique para abrir no Google Maps</p>
                </div>
              </div>
              <span className="text-purple-600 transition-transform group-hover:translate-x-1">
                →
              </span>
            </div>
          </a>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Kore Nexus. Todos os direitos reservados.
          </p>
          <p className="text-center text-xs text-gray-400">
            Desenvolvimento de sistemas em Jundiai | Criacao de aplicativos | Softwares
            para empresas SP
          </p>
        </div>
      </div>
    </footer>
  )
}
