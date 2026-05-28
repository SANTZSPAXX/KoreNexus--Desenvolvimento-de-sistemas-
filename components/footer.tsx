"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react"

const footerLinks = {
  produtos: [
    { name: "Produtividade", href: "#produtividade" },
    { name: "Comunicação & IA", href: "#comunicacao" },
    { name: "Automação Comercial", href: "#automacao" },
    { name: "Utilitários Web", href: "#utilitarios" },
  ],
  empresa: [
    { name: "Sobre Nós", href: "#institucional" },
    { name: "Trabalhe Conosco", href: "https://trabalheconoscokn.lovable.app/" },
    { name: "Blog", href: "#" },
    { name: "Contato", href: "#contato" },
  ],
  suporte: [
    { name: "Documentação", href: "#" },
    { name: "Status do Sistema", href: "#" },
    { name: "Termos de Uso", href: "#" },
    { name: "Política de Privacidade", href: "#" },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
]

export function Footer() {
  return (
    <footer id="contato" className="relative border-t border-red-900/30 bg-black/50 backdrop-blur-sm">
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
            <Link href="/" className="mb-6 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-red-600/50 bg-gradient-to-br from-red-900/50 to-black">
                <Zap className="h-5 w-5 text-red-500" />
              </div>
              <span className="bg-gradient-to-r from-white via-red-200 to-red-500 bg-clip-text text-xl font-bold tracking-tight text-transparent">
                Kore Nexus
              </span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Fábrica de software em Jundiaí especializada em desenvolvimento de sistemas,
              criação de aplicativos e softwares para empresas de SP.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:contato@korenexus.com.br"
                className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-red-400"
              >
                <Mail className="h-4 w-4 text-red-500" />
                contato@korenexus.com.br
              </a>
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-red-400"
              >
                <Phone className="h-4 w-4 text-red-500" />
                (11) 99999-9999
              </a>
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                <span>Jundiaí, SP - Brasil</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-red-900/50 bg-red-950/20 text-gray-400 transition-all duration-300 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_15px_rgba(255,0,0,0.2)]"
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
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
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
                      className="text-sm text-gray-400 transition-colors hover:text-red-400"
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
          className="mt-12 rounded-2xl border border-red-600/30 bg-gradient-to-r from-red-950/30 to-red-900/10 p-6 sm:p-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h3 className="mb-1 text-lg font-bold text-white">
                Pronto para transformar seu negócio?
              </h3>
              <p className="text-sm text-gray-400">
                Fale com nossos consultores e descubra a solução ideal para sua empresa.
              </p>
            </div>
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre a Kore Nexus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-red-500 hover:shadow-[0_0_30px_rgba(255,0,0,0.4)]"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-red-900/30 pt-8 sm:flex-row">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Kore Nexus. Todos os direitos reservados.
          </p>
          <p className="text-center text-xs text-gray-600">
            Desenvolvimento de sistemas em Jundiaí | Criação de aplicativos | Softwares
            para empresas SP
          </p>
        </div>
      </div>
    </footer>
  )
}
