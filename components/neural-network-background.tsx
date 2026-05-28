"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  pulsePhase: number
}

export function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let nodes: Node[] = []
    const nodeCount = 100
    const connectionDistance = 180
    const mouseRadius = 150

    const mouse = { x: -1000, y: -1000 }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }

    const initNodes = () => {
      nodes = []
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2.5 + 1.5,
          pulsePhase: Math.random() * Math.PI * 2,
        })
      }
    }

    const drawNode = (node: Node, time: number) => {
      const pulse = Math.sin(time * 0.002 + node.pulsePhase) * 0.5 + 0.5
      const alpha = 0.5 + pulse * 0.4
      const radius = node.radius + pulse * 2

      // Outer glow - more intense red
      const gradient = ctx.createRadialGradient(
        node.x,
        node.y,
        0,
        node.x,
        node.y,
        radius * 5
      )
      gradient.addColorStop(0, `rgba(255, 0, 0, ${alpha * 0.9})`)
      gradient.addColorStop(0.4, `rgba(255, 0, 0, ${alpha * 0.4})`)
      gradient.addColorStop(1, "rgba(255, 0, 0, 0)")

      ctx.beginPath()
      ctx.arc(node.x, node.y, radius * 5, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      // Core - bright red
      ctx.beginPath()
      ctx.arc(node.x, node.y, radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 30, 30, ${alpha})`
      ctx.fill()

      // Inner bright spot
      ctx.beginPath()
      ctx.arc(node.x, node.y, radius * 0.5, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 100, 100, ${alpha})`
      ctx.fill()
    }

    const drawConnection = (
      node1: Node,
      node2: Node,
      distance: number,
      time: number
    ) => {
      const alpha = (1 - distance / connectionDistance) * 0.5
      const pulse = Math.sin(time * 0.001) * 0.2 + 0.8

      // Main connection line
      ctx.beginPath()
      ctx.moveTo(node1.x, node1.y)
      ctx.lineTo(node2.x, node2.y)
      ctx.strokeStyle = `rgba(255, 0, 0, ${alpha * pulse})`
      ctx.lineWidth = 1
      ctx.stroke()

      // Glow effect for connection
      ctx.beginPath()
      ctx.moveTo(node1.x, node1.y)
      ctx.lineTo(node2.x, node2.y)
      ctx.strokeStyle = `rgba(255, 50, 50, ${alpha * pulse * 0.3})`
      ctx.lineWidth = 3
      ctx.stroke()
    }

    const updateNode = (node: Node) => {
      // Mouse interaction
      const dx = mouse.x - node.x
      const dy = mouse.y - node.y
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < mouseRadius) {
        const force = (mouseRadius - dist) / mouseRadius
        node.vx -= (dx / dist) * force * 0.02
        node.vy -= (dy / dist) * force * 0.02
      }

      // Update position
      node.x += node.vx
      node.y += node.vy

      // Boundary bounce
      if (node.x < 0 || node.x > canvas.width) node.vx *= -1
      if (node.y < 0 || node.y > canvas.height) node.vy *= -1

      // Keep in bounds
      node.x = Math.max(0, Math.min(canvas.width, node.x))
      node.y = Math.max(0, Math.min(canvas.height, node.y))

      // Damping
      node.vx *= 0.995
      node.vy *= 0.995
    }

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections first
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            drawConnection(nodes[i], nodes[j], distance, time)
          }
        }
      }

      // Draw and update nodes
      for (const node of nodes) {
        updateNode(node)
        drawNode(node, time)
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top + window.scrollY
    }

    const handleResize = () => {
      resizeCanvas()
      initNodes()
    }

    // Observe document height changes
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas()
    })
    resizeObserver.observe(document.body)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    resizeCanvas()
    initNodes()
    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8f8f8 50%, #f0f0f0 100%)" }}
    />
  )
}
