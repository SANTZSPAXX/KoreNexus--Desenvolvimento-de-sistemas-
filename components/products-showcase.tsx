"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { categories, productsByCategory, type Product } from "@/lib/products-data"

function ProductCard({
  product,
  index,
}: {
  product: Product
  index: number
}) {
  const Icon = product.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={cn(
        "group glass-card relative flex flex-col rounded-xl p-6",
        product.featured && "border-purple-200 md:col-span-2"
      )}
    >
      {/* Tag */}
      <span className="mb-4 inline-flex w-fit rounded-full border border-purple-200 bg-purple-50/80 px-3 py-1 text-xs font-medium text-purple-700">
        {product.tag}
      </span>

      {/* Icon & Title */}
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 shadow-md shadow-purple-100 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-200">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
      </div>

      {/* Description */}
      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-3">
        {product.description}
      </p>

      {/* Links */}
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-purple-600 transition-colors hover:text-purple-700"
        >
          Acessar
          <ExternalLink className="h-4 w-4" />
        </a>
        <Link
          href={`/ferramentas/${product.slug}`}
          className="flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-700"
        >
          Saiba mais
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}

export function ProductsShowcase() {
  const [activeCategory, setActiveCategory] = useState("produtividade")

  return (
    <section id="produtos" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full glass px-4 py-1 text-sm font-medium text-purple-700">
            Hub de Produtos
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            O Ecossistema Kore Nexus
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-gray-600">
            26+ sistemas integrados para transformar a operacao do seu negocio. Escolha a
            categoria e explore nossas solucoes de alta performance.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 flex flex-wrap justify-center gap-3"
        >
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <Button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                variant={activeCategory === cat.id ? "default" : "outline"}
                className={cn(
                  "h-auto px-5 py-3 transition-all duration-300",
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-200/50"
                    : "border-gray-200 bg-white/80 text-gray-700 hover:border-purple-400 hover:bg-purple-50 hover:text-purple-700"
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                {cat.label}
              </Button>
            )
          })}
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            id={activeCategory}
          >
            {productsByCategory[activeCategory as keyof typeof productsByCategory].map(
              (product, i) => (
                <ProductCard key={product.slug} product={product} index={i} />
              )
            )}
          </motion.div>
        </AnimatePresence>

        {/* Ver todas as ferramentas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="mb-2 text-sm text-gray-500">
            Todas as ferramentas possuem paginas individuais otimizadas para SEO
          </p>
        </motion.div>
      </div>
    </section>
  )
}
