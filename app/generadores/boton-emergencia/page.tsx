"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { DocentIALogo } from "@/components/docentia-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { Loader2, Zap, Download, Plus, RotateCcw } from "lucide-react"
import Link from "next/link"

const API_URL = "https://docentia-backend.onrender.com"

interface FormData {
  nivel: string
  curso: string
  asignatura: string
  situacion: string
  duracion: string
}

export default function BotonEmergenciaPage() {
  const [loading, setLoading] = useState(false)
  const [resultado, setResultado] = useState<string | null>(null)
  const [formData, setFormData] = useState<FormData>({
    nivel: "",
    curso: "",
    asignatura: "",
    situacion: "",
    duracion: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResultado(null)

    try {
      const response = await fetch(`${API_URL}/generar/boton-emergencia`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      setResultado(data.contenido)
    } catch (error) {
      console.error("Error:", error)
      setResultado("Error al generar la actividad. Por favor, intenta de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setFormData({
      nivel: "",
      curso: "",
      asignatura: "",
      situacion: "",
      duracion: ""
    })
    setResultado(null)
  }

  const handleDownload = () => {
    if (resultado) {
      const blob = new Blob([resultado], { type: 'text/plain' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `actividad-emergencia-${Date.now()}.txt`
      a.click()
      URL.revokeObjectURL(url)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
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

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 lg:py-20">
        
        {/* Hero */}
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mb-6">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Botón de Emergencia
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Genera actividades completas en 30 segundos para situaciones imprevistas
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-semibold border border-emerald-500/30">
            ✨ Gratis - 5 usos/mes
          </div>
        </div>

        {/* Form Card */}
        {!resultado && !loading && (
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>📋 Datos de la actividad</CardTitle>
              <CardDescription>
                Completa la información y generaremos una actividad lista para usar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="space-y-2">
                  <Label htmlFor="nivel">Nivel Educativo *</Label>
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
                  <Label htmlFor="curso">Curso *</Label>
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
                  <Label htmlFor="asignatura">Asignatura *</Label>
                  <Select
                    value={formData.asignatura}
                    onValueChange={(value) => setFormData({ ...formData, asignatura: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una asignatura" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Lengua Castellana">Lengua Castellana</SelectItem>
                      <SelectItem value="Matemáticas">Matemáticas</SelectItem>
                      <SelectItem value="Ciencias Naturales">Ciencias Naturales</SelectItem>
                      <SelectItem value="Ciencias Sociales">Ciencias Sociales</SelectItem>
                      <SelectItem value="Inglés">Inglés</SelectItem>
                      <SelectItem value="Educación Física">Educación Física</SelectItem>
                      <SelectItem value="Música">Música</SelectItem>
                      <SelectItem value="Lengua y Literatura">Lengua y Literatura</SelectItem>
                      <SelectItem value="Geografía e Historia">Geografía e Historia</SelectItem>
                      <SelectItem value="Biología y Geología">Biología y Geología</SelectItem>
                      <SelectItem value="Física y Química">Física y Química</SelectItem>
                      <SelectItem value="Tecnología">Tecnología</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="situacion">Describe la situación urgente *</Label>
                  <Textarea
                    id="situacion"
                    placeholder="Ejemplo: Tengo que sustituir a un compañero en 5 minutos y necesito una actividad sobre fracciones"
                    value={formData.situacion}
                    onChange={(e) => setFormData({ ...formData, situacion: e.target.value })}
                    required
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duracion">Duración de la actividad *</Label>
                  <Select
                    value={formData.duracion}
                    onValueChange={(value) => setFormData({ ...formData, duracion: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona duración" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15 minutos">15 minutos</SelectItem>
                      <SelectItem value="30 minutos">30 minutos</SelectItem>
                      <SelectItem value="45 minutos">45 minutos</SelectItem>
                      <SelectItem value="60 minutos">1 hora</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
                    size="lg"
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    Generar Actividad
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

        {/* Loading State */}
        {loading && (
          <Card className="max-w-3xl mx-auto">
            <CardContent className="py-12 text-center">
              <Loader2 className="mx-auto h-16 w-16 animate-spin text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-2">⚡ Generando actividad de emergencia...</h3>
              <p className="text-muted-foreground mb-4">Claude está creando tu actividad perfecta en tiempo récord</p>
              <p className="text-sm text-muted-foreground">
                ⏱️ Ahorrando tiempo... 📊 Analizando LOMLOE... ✨ Aplicando normativa...
              </p>
            </CardContent>
          </Card>
        )}

        {/* Result Card */}
        {resultado && !loading && (
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>✅ Actividad de Emergencia Generada</CardTitle>
              <CardDescription>Tu actividad está lista para usar inmediatamente</CardDescription>
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
                  Nueva Actividad
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <DocentIALogo />
            </div>
            <p>© 2025 DocentIA. Diseñado para docentes de Extremadura.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
