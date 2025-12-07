"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

const generateCircuitPoints = () => {
  const points = []
  for (let i = 0; i < 15; i++) {
    points.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1.5 + Math.random() * 1.5,
      delay: Math.random() * 3,
      depth: Math.random(), // added depth layer
    })
  }
  return points
}

export function Header() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)
  const [circuitPoints] = useState(generateCircuitPoints())

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark

    if (shouldBeDark) {
      document.documentElement.classList.add("dark")
      setIsDark(true)
    } else {
      document.documentElement.classList.remove("dark")
      setIsDark(false)
    }
  }, [])

  const toggleDarkMode = () => {
    const html = document.documentElement
    const newIsDark = !isDark

    if (newIsDark) {
      html.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      html.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }

    setIsDark(newIsDark)
  }

  if (!mounted) return null

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="container relative z-10 flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-sm md:text-base hover:opacity-80 transition-opacity flex-shrink-0"
        >
          <img src="/docentia-logo.png" alt="DocentIA" className="h-14 w-auto" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          <Link href="/#funciones" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Funciones
          </Link>
          <Link href="/#planes" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Planes
          </Link>
          <Link
            href="/#testimonios"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Testimonios
          </Link>
          <Link href="/#faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Theme Toggle */}
        <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="flex-shrink-0">
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>

      <style>{`
        @keyframes pulseBright {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 1; }
        }
        
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        
        @keyframes expandGlow {
          0% { r: 0; opacity: 0.3; }
          100% { r: var(--expand-r); opacity: 0; }
        }
      `}</style>
    </header>
  )
}
