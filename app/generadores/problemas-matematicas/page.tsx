"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { DocentIALogo } from "@/components/docentia-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { Loader2, Calculator, Download, Plus, RotateCcw } from "lucide-react"
import Link from "next/link"

const API_URL = "https://docentia-backend.onrender.com"

interface FormData {
  nivel: string
  curso: string
  tema: string
  num_problemas: number
  dificultad: string
  con_soluciones: boolean
}

export default function ProblemasMatematicasPage() {
  const [loading, setLoading] = useState(false)
  const [resultado, setResultado] = useState<string | null>(null)
  const [formData, setFormData] = useState<FormData>({
    nivel: "",
    curso: "",
    tema: "",
    num_problemas: 5,
    dificultad: "",
    con_soluciones: true
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResultado(null)

    try {
      const response = await fetch(`${API_URL}/generar/problemas-matematicas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error(`Error ${response.status}`)
      }

      const data = await response.json()
      setResultado(data.contenido)
    } catch (error) {
      console.error("Error:", error)
      setResultado("Error al generar los problemas. Por favor, intenta de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setFormData({
      nivel: "",
      curso: "",
      tema: "",
      num_problemas: 5,
      dificultad: "",
      con_soluciones: true
    })
    setResultado(null)
  }

  const handleDownload = () => {
    if (resultado) {
      const blob = new Blob([resultado], { type: 'text/plain' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `problemas-matematicas-${Date.now()}.txt`
      a.click()
      URL.revokeObjectURL(url)
    }
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <DocentIALogo />
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/#funciones" className="text-foreground/80 hover:text-foreground transition-colors text-sm">
                Funciones
              </Link>
              <Link href="/#precios" className="text-foreground/80 hover:text-foreground transition-colors text-sm">
                Precios
              </Link>
              <Link href="/" className="text-foreground/80 hover:text-foreground transition-colors text-sm">
                Volver al inicio
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 lg:py-20">
        
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6">
            <Calculator className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Problemas de Matemáticas
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Genera problemas adaptados con soluciones paso a paso
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-semibold border border-emerald-500/30">
            ✨ Gratis
          </div>
        </div>

        {!resultado && !loading && (
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>🔢 Configuración de problemas</CardTitle>
              <CardDescription>
                Define el tipo de problemas matemáticos que necesitas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="space-y-2">
                  <Label>Nivel Educativo *</Label>
                  <Select
                    value={formData.nivel}
                    onValueChange={(value) => setFormData({ ...formData, nivel: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un nivel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Primaria">Primaria</SelectItem>
                      <SelectItem value="ESO">ESO</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Curso *</Label>
                  <Select
                    value={formData.curso}
                    onValueChange={(value) => setFormData({ ...formData, curso: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un curso" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1º Primaria">1º Primaria</SelectItem>
                      <SelectItem value="2º Primaria">2º Primaria</SelectItem>
                      <SelectItem value="3º Primaria">3º Primaria</SelectItem>
                      <SelectItem value="4º Primaria">4º Primaria</SelectItem>
                      <SelectItem value="5º Primaria">5º Primaria</SelectItem>
                      <SelectItem value="6º Primaria">6º Primaria</SelectItem>
                      <SelectItem value="1º ESO">1º ESO</SelectItem>
                      <SelectItem value="2º ESO">2º ESO</SelectItem>
                      <SelectItem value="3º ESO">3º ESO</SelectItem>
                      <SelectItem value="4º ESO">4º ESO</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Tema *</Label>
                  <Select
                    value={formData.tema}
                    onValueChange={(value) => setFormData({ ...formData, tema: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un tema" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sumas-restas">Sumas y restas</SelectItem>
                      <SelectItem value="multiplicacion-division">Multiplicación y división</SelectItem>
                      <SelectItem value="fracciones">Fracciones</SelectItem>
                      <SelectItem value="decimales">Decimales</SelectItem>
                      <SelectItem value="geometria">Geometría</SelectItem>
                      <SelectItem value="algebra">Álgebra</SelectItem>
                      <SelectItem value="ecuaciones">Ecuaciones</SelectItem>
                      <SelectItem value="porcentajes">Porcentajes</SelectItem>
                      <SelectItem value="proporcionalidad">Proporcionalidad</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Número de problemas *</Label>
                  <Input
                    type="number"
                    min="1"
                    max="20"
                    value={formData.num_problemas}
                    onChange={(e) => setFormData({ ...formData, num_problemas: parseInt(e.target.value) })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Dificultad *</Label>
                  <Select
                    value={formData.dificultad}
                    onValueChange={(value) => setFormData({ ...formData, dificultad: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona dificultad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="facil">Fácil</SelectItem>
                      <SelectItem value="media">Media</SelectItem>
                      <SelectItem value="dificil">Difícil</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="soluciones"
                    checked={formData.con_soluciones}
                    onCheckedChange={(checked) => setFormData({ ...formData, con_soluciones: checked as boolean })}
                  />
                  <Label htmlFor="soluciones" className="cursor-pointer">
                    Incluir soluciones paso a paso
                  </Label>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white"
                    size="lg"
                  >
                    <Calculator className="mr-2 h-5 w-5" />
                    Generar Problemas
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={handleReset}
                    size="lg"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Limpiar
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {loading && (
          <Card className="max-w-3xl mx-auto">
            <CardContent className="py-12 text-center">
              <Loader2 className="mx-auto h-16 w-16 animate-spin text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-2">🔢 Generando problemas matemáticos...</h3>
              <p className="text-muted-foreground mb-4">Claude está creando problemas contextualizados y adaptados</p>
              <p className="text-sm text-muted-foreground">
                🧮 Calculando... 📐 Contextualizando... ✍️ Redactando soluciones...
              </p>
            </CardContent>
          </Card>
        )}

        {resultado && !loading && (
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>✅ Problemas Generados</CardTitle>
              <CardDescription>Tus problemas están listos para usar en clase</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/30 p-6 rounded-xl whitespace-pre-wrap border max-h-96 overflow-y-auto font-mono text-sm">
                {resultado}
              </div>
              <div className="flex gap-4">
                <Button
                  onClick={handleDownload}
                  className="flex-1 bg-primary hover:bg-primary/90"
                  size="lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Descargar
                </Button>
                <Button
                  onClick={handleReset}
                  variant="outline"
                  size="lg"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Nuevos Problemas
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

      </main>

      <footer className="border-t border-border/40 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <DocentIALogo />
            <p>© 2025 DocentIA. Diseñado para docentes de Extremadura.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
