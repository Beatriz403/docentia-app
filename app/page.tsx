import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DocentIALogo } from "@/components/docentia-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { NetworkMesh } from "@/components/network-mesh"
import { Target, FileText, Lightbulb, Calculator, Check, Zap, BookOpen, ClipboardList, BarChart3, Cpu } from "lucide-react"

const features = [
  {
    id: 1,
    title: "Botón de emergencia",
    description: "Envía rápidamente comunicaciones importantes",
    icon: Zap,
    href: "/generadores/boton-emergencia",
    image: "/emergency-button-teacher.jpg",
  },
  {
    id: 2,
    title: "Unidades didácticas",
    description: "Prepara matereterial de forma con facilidad",
    icon: BookOpen,
    href: "/generadores/unidades-didacticas",
    image: "/learning-units-preparation.jpg",
  },
  {
    id: 3,
    title: "Exámenes automáticos",
    description: "Corrige exámenes de forma eficiente",
    icon: ClipboardList,
    href: "/generadores/examenes-automaticos",
    image: "/automatic-exam-correction.jpg",
  },
  {
    id: 4,
    title: "Situaciones de aprendizaje",
    description: "Crea contextos educativos enriquecedores",
    icon: Lightbulb,
    href: "/generadores/situaciones-aprendizaje",
    image: "/learning-situations.jpg",
  },
  {
    id: 5,
    title: "Informes",
    description: "Genera reportes detallados de progreso",
    icon: BarChart3,
    href: "/generadores/informes",
    image: "/progress-reports.jpg",
  },
  {
    id: 6,
    title: "Generador de ideas",
    description: "Obtén inspiración para nuevas actividades",
    icon: Cpu,
    href: "/generadores/generador-ideas",
    image: "/idea-generator.jpg",
  },
  {
    id: 7,
    title: "Problemas de Matemáticas",
    description: "Crea ejercicios personalizados de matemáticas",
    icon: Zap,
    href: "/generadores/problemas-matematicas",
    image: "/math-problems-generator.jpg",
  },
]

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <DocentIALogo />
            <nav className="hidden md:flex items-center gap-8">
              <a href="#funciones" className="text-foreground/80 hover:text-foreground transition-colors text-sm">
                Funciones
              </a>
              <a href="#precios" className="text-foreground/80 hover:text-foreground transition-colors text-sm">
                Precios
              </a>
              <a href="#testimonios" className="text-foreground/80 hover:text-foreground transition-colors text-sm">
                Sobre nosotros
              </a>
              <a href="#faq" className="text-foreground/80 hover:text-foreground transition-colors text-sm">
                FAQ
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <a href="https://docentia-frontend.vercel.app" className="hidden md:block">
                <Button size="sm">Acceder</Button>
              </a>
            </div>
          </div>
        </div>
      </header>







      <section id="funciones" className="bg-gradient-to-b from-slate-700 to-slate-600 py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Funciones</h2>
            <p className="text-xl text-slate-200 max-w-3xl">
              Con DocentIA optimizas tu labor con varias herramientas que agilizan tu trabajo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Feature 1 - Botón de Emergencia */}
            <a href="https://docentia-frontend.vercel.app/generadores/boton-emergencia.html">
              <Card className="bg-white overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer h-full">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/images/image-f7ilzpdPF1zewVCY5snGjZ0zhBr9Kl.png"
                    alt="Botón de emergencia - Envía rápidamente comunicaciones importantes"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Botón de emergencia 🚨</h3>
                  <p className="text-slate-600">Genera actividades en 30 segundos para situaciones urgentes</p>
                </CardContent>
              </Card>
            </a>

            {/* Feature 2 - Unidades Didácticas */}
            <a href="https://docentia-frontend.vercel.app">
              <Card className="bg-white overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer h-full">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/images/image-AFn1DwPHiuLFf4gRGx8rkZf331G3IH.png"
                    alt="Unidades didácticas - Prepara material de forma con facilidad"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Unidades didácticas 📚</h3>
                  <p className="text-slate-600">Prepara material completo con facilidad</p>
                </CardContent>
              </Card>
            </a>

            {/* Feature 3 - Exámenes Automáticos con Rúbricas */}
            <a href="https://docentia-frontend.vercel.app">
              <Card className="bg-white overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer h-full">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/images/mujer-portada.png"
                    alt="Exámenes automáticos - Corrige examenes de forma eficiente"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Exámenes automáticos 📝</h3>
                  <p className="text-slate-600">Genera exámenes y crea rúbricas de evaluación</p>
                </CardContent>
              </Card>
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
            {/* Feature 4 - Situaciones de Aprendizaje */}
            <Card className="bg-white/95 backdrop-blur border-2 border-slate-200 overflow-hidden group hover:border-primary/50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-5">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-400 to-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Situaciones de Aprendizaje</h3>
                  <p className="text-sm text-slate-600">Diseños didácticos</p>
                </div>
              </CardContent>
            </Card>

            {/* Feature 5 - Informes */}
            <Card className="bg-white/95 backdrop-blur border-2 border-slate-200 overflow-hidden group hover:border-primary/50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-5">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Informes para familias</h3>
                  <p className="text-sm text-slate-600">Comunicación profesional</p>
                </div>
              </CardContent>
            </Card>

            {/* Feature 6 - Generador de Ideas */}
            <Card className="bg-white/95 backdrop-blur border-2 border-slate-200 overflow-hidden group hover:border-primary/50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-5">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Generador de ideas</h3>
                  <p className="text-sm text-slate-600">Inspiración ilimitada</p>
                </div>
              </CardContent>
            </Card>

            {/* Feature 7 - Problemas de Matemáticas */}
            <a href="https://docentia-frontend.vercel.app/generadores/problemas-matematicas.html">
              <Card className="bg-white/95 backdrop-blur border-2 border-slate-200 overflow-hidden group hover:border-primary/50 hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <CardContent className="p-5">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Calculator className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Problemas de Matemáticas</h3>
                    <p className="text-sm text-slate-600">Con soluciones paso a paso</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="container mx-auto px-6 py-20">
        <div className="space-y-6 mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">Planes y precios</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Elige el plan que mejor se adapte a tus necesidades. Todos con acceso inmediato.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Plan Gratis */}
          <Card className="bg-card border-border/50 hover:border-primary/30 transition-colors relative">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Gratis</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">0€</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
                <p className="text-sm text-muted-foreground">Para probar DocentIA</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">5 usos/mes del Botón de Emergencia</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Actividades en 30 segundos</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Compatible con LOMLOE</span>
                </div>
              </div>

              <a href="https://docentia-frontend.vercel.app" className="block">
                <Button variant="outline" className="w-full">
                  Empezar gratis
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Plan Profesional */}
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/50 relative shadow-lg shadow-primary/20">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                Más popular
              </span>
            </div>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Profesional</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">9.99€</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
                <p className="text-sm text-muted-foreground">Para profesores activos</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Todos los generadores ilimitados</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Botón de Emergencia ilimitado</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Unidades didácticas completas</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Exámenes y rúbricas</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Soporte prioritario</span>
                </div>
              </div>

              <a href="https://docentia-frontend.vercel.app" className="block">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Comenzar ahora
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Plan Centro */}
          <Card className="bg-card border-border/50 hover:border-primary/30 transition-colors">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Centro</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">A medida</span>
                </div>
                <p className="text-sm text-muted-foreground">Para centros educativos</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Todo de Profesional</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Licencias ilimitadas</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Gestión centralizada</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Formación incluida</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Soporte dedicado</span>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Contactar
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="bg-muted/50 py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-6 mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">Lo que dicen nuestros usuarios</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Profesores de toda Extremadura ya están ahorrando tiempo con DocentIA
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="bg-card border-border/50 hover:border-primary/30 transition-colors">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img src="/images/image.png" alt="María G." className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground/90 text-pretty leading-relaxed">
                      "DocentIA me ha cambiado la vida. Lo que antes me llevaba horas ahora lo tengo en minutos. Increíble."
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-foreground">María G.</p>
                  <p className="text-sm text-muted-foreground">Profesora - Cáceres</p>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-card border-border/50 hover:border-primary/30 transition-colors">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img src="/images/image.png" alt="Javier L." className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground/90 text-pretty leading-relaxed">
                      "He podido crear ahorro de horario y contenido de muy buen nivel con facilidad. Increíble
                      herramienta."
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-foreground">Javier L.</p>
                  <p className="text-sm text-muted-foreground">Profesor - Badajoz</p>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-card border-border/50 hover:border-primary/30 transition-colors">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img src="/images/image.png" alt="Beatriz S." className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground/90 text-pretty leading-relaxed">
                      "He pasado de hacer muchas tareas a tener una plataforma que lo simplifica todo. Ahorro horas cada
                      semana."
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-foreground">Beatriz S.</p>
                  <p className="text-sm text-muted-foreground">Profesora - Mérida</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="container mx-auto px-6 py-20">
        <div className="space-y-6 mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">Preguntas frecuentes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Resolvemos tus dudas sobre DocentIA
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          <Card className="bg-card border-border/50">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-3">¿Necesito conocimientos técnicos para usar DocentIA?</h3>
              <p className="text-muted-foreground text-pretty">
                No, DocentIA está diseñado para ser intuitivo y fácil de usar. Solo necesitas saber lo que quieres crear
                y la plataforma genera el contenido por ti en segundos.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-3">¿El contenido generado cumple con la LOMLOE?</h3>
              <p className="text-muted-foreground text-pretty">
                Sí, todo el contenido está actualizado según la LOMLOE y los decretos específicos de Extremadura. Puedes
                personalizarlo según tus necesidades específicas.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-3">¿Puedo cancelar mi suscripción en cualquier momento?</h3>
              <p className="text-muted-foreground text-pretty">
                Sí, puedes cancelar tu suscripción cuando quieras sin penalizaciones. Si cancelas, seguirás teniendo
                acceso hasta el final del período de facturación.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-3">¿Qué incluye el Botón de Emergencia gratuito?</h3>
              <p className="text-muted-foreground text-pretty">
                El plan gratuito incluye 5 usos al mes del Botón de Emergencia, que genera actividades completas en 30
                segundos. Es perfecto para situaciones imprevistas o para probar la plataforma.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-3">¿Ofrecen descuentos para centros educativos?</h3>
              <p className="text-muted-foreground text-pretty">
                Sí, ofrecemos planes personalizados para centros educativos con descuentos según el número de licencias.
                Contacta con nosotros para una propuesta a medida.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-3">¿Mis datos están seguros?</h3>
              <p className="text-muted-foreground text-pretty">
                Absolutamente. Cumplimos con el RGPD y todas las normativas de protección de datos. Tus documentos y
                contenidos son privados y no se comparten con terceros.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <Card className="bg-gradient-to-br from-primary/15 to-primary/5 border-primary/30 overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-5"></div>
          <CardContent className="p-12 lg:p-16 text-center space-y-8 relative z-10">
            <h2 className="text-4xl lg:text-6xl font-bold text-balance">
              La burocracia te roba tiempo. <br />
              <span className="text-primary">DocentIA te lo devuelve.</span>
            </h2>
            <p className="text-xl lg:text-2xl text-foreground/90 max-w-3xl mx-auto text-pretty">
              Únete a cientos de docentes extremeños que ya están transformando su trabajo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://docentia-frontend.vercel.app">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-xl px-12 py-8 rounded-xl font-bold shadow-lg shadow-primary/30"
                >
                  🚀 Empezar ahora gratis
                </Button>
              </a>
            </div>
            <div className="pt-4 space-y-2">
              <p className="text-sm text-muted-foreground font-medium">
                Sin tarjeta de crédito - Sin compromiso - Botón de Emergencia gratis para siempre
              </p>
              <p className="text-xs text-muted-foreground">Cumple con LOMLOE y normativa de Extremadura</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <DocentIALogo />
            <p className="text-sm text-muted-foreground">© 2025 DocentIA. Diseñado para docentes de Extremadura.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
