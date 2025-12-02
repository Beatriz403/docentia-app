"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative inline-flex items-center justify-center w-14 h-7 rounded-full bg-secondary hover:bg-secondary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
      aria-label="Cambiar tema"
    >
      <span className="sr-only">Cambiar tema</span>
      <div
        className={`absolute flex items-center justify-center w-6 h-6 rounded-full bg-primary transition-transform duration-200 ${
          theme === "light" ? "translate-x-[-10px]" : "translate-x-[10px]"
        }`}
      >
        {theme === "light" ? (
          <Sun className="w-3.5 h-3.5 text-primary-foreground" />
        ) : (
          <Moon className="w-3.5 h-3.5 text-primary-foreground" />
        )}
      </div>
    </button>
  )
}
