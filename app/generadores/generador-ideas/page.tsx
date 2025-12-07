"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Loader2, Download, Cpu } from "lucide-react"

export default function GeneradorIdeas() {
  const [formData, setFormData] = useState({
    nivel: "",
    asignatura: "",
    tema: "",
    tipo: "",
  })

  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("https://docentia-backend.onrender.com/generar/generador-ideas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      setResult(data.resultado || data.message)
    } catch (error) {
      console.error("Error:", error)
      setResult("Error al generar ideas. Intenta nuevamente.")
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setFormData({ nivel: "", asignatura: "", tema: "", tipo: "" })
    setResult(null)
  }

  const handleDownload = () => {
    if (!result) return
    const element = document.createElement("a")
    const file = new Blob([result], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = "ideas.txt"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <main className="min-h-screen bg-background bg-circuits">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, #00d9ff, transparent)" }}
          ></div>
        </div>

        <div className="container max-w-4xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-white text-balance">Generador de Ideas</h1>
              <p className="text-xl text-muted-foreground">Obtén inspiración para nuevas actividades</p>
              <Badge className="w-fit bg-primary/20 text-primary border-primary">🧠 Creatividad sin límites</Badge>
            </div>

            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Generador de Ideas"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-4 md:px-6">
        <div className="container max-w-4xl mx-auto">
          {!result ? (
            <Card className="bg-card border border-border p-8 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Nivel Educativo</label>
                  <Select value={formData.nivel} onValueChange={(value) => setFormData({ ...formData, nivel: value })}>
                    <SelectTrigger className="bg-input border-border">
                      <SelectValue placeholder="Selecciona el nivel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="primaria">Primaria</SelectItem>
                      <SelectItem value="eso">ESO</SelectItem>
                      <SelectItem value="bachillerato">Bachillerato</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Asignatura</label>
                  <Select
                    value={formData.asignatura}
                    onValueChange={(value) => setFormData({ ...formData, asignatura: value })}
                  >
                    <SelectTrigger className="bg-input border-border">
                      <SelectValue placeholder="Selecciona la asignatura" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="matematicas">Matemáticas</SelectItem>
                      <SelectItem value="lengua">Lengua</SelectItem>
                      <SelectItem value="ingles">Inglés</SelectItem>
                      <SelectItem value="ciencias">Ciencias</SelectItem>
                      <SelectItem value="historia">Historia</SelectItem>
                      <SelectItem value="ed-fisica">Educación Física</SelectItem>
                      <SelectItem value="arte">Arte</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Tema o Competencia</label>
                  <Textarea
                    placeholder="Describe el tema o competencia..."
                    className="bg-input border-border min-h-24"
                    value={formData.tema}
                    onChange={(e) => setFormData({ ...formData, tema: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Tipo de Actividad</label>
                  <Select value={formData.tipo} onValueChange={(value) => setFormData({ ...formData, tipo: value })}>
                    <SelectTrigger className="bg-input border-border">
                      <SelectValue placeholder="Selecciona el tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grupal">Grupal</SelectItem>
                      <SelectItem value="individual">Individual</SelectItem>
                      <SelectItem value="parejas">Parejas</SelectItem>
                      <SelectItem value="mixto">Mixto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Generando...
                      </>
                    ) : (
                      <>
                        <Cpu className="w-4 h-4 mr-2" />
                        Generar Ideas
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-border bg-transparent"
                    onClick={handleReset}
                  >
                    Limpiar
                  </Button>
                </div>
              </form>
            </Card>
          ) : (
            <Card className="bg-card border border-border p-8 space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Ideas Generadas</h2>
                <div className="bg-input border border-border rounded-lg p-6 max-h-96 overflow-y-auto">
                  <p className="text-foreground whitespace-pre-wrap">{result}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={handleDownload}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground h-12"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Descargar Word
                </Button>
                <Button
                  onClick={handleReset}
                  className="flex-1 bg-primary/20 hover:bg-primary/30 text-primary border border-primary h-12"
                  variant="outline"
                >
                  Nuevas Ideas
                </Button>
              </div>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
