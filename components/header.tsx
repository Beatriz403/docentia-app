import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, FileText, Lightbulb, Calculator, Check } from "lucide-react"
import { DocentIALogo } from "@/components/docentia-logo"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased min-h-screen bg-background">
        {/* Header personalizado */}
        <Header />

        {/* Contenido principal */}
        <main className="container mx-auto px-6 py-20">
          {/* Sección de cards de la segunda página */}
          <section className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/95 backdrop-blur border-2 border-slate-200 overflow-hidden group hover:border-primary/50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-5 text-center">
                <Target className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-900">Card 1</h3>
                <p className="text-sm text-slate-600">Descripción de la card 1</p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur border-2 border-slate-200 overflow-hidden group hover:border-primary/50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-5 text-center">
                <FileText className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-900">Card 2</h3>
                <p className="text-sm text-slate-600">Descripción de la card 2</p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur border-2 border-slate-200 overflow-hidden group hover:border-primary/50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-5 text-center">
                <Lightbulb className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-900">Card 3</h3>
                <p className="text-sm text-slate-600">Descripción de la card 3</p>
              </CardContent>
            </Card>
          </section>

          {/* Aquí se renderiza cualquier contenido adicional */}
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-border/40 mt-20">
          <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <DocentIALogo />
            <p className="text-sm text-muted-foreground">
              © 2025 DocentIA. Diseñado para docentes de Extremadura.
            </p>
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  )
}
