import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DocentIALogo } from "@/components/docentia-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { NetworkMesh } from "@/components/network-mesh"
import { Target, FileText, Lightbulb, Calculator, Check } from "lucide-react"

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
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="circuit-pattern relative overflow-hidden">
        <NetworkMesh />
        <div className="container mx-auto px-6 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold text-balance leading-tight text-white">
                Empieza gratis con Docent<span className="text-primary">IA</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 text-pretty font-medium">
                Simplifica tu trabajo y gana tiempo para lo importante
              </p>
              <p className="text-lg text-white/70 text-pretty">
                Diseñado para docentes de Extremadura. Compatible con LOMLOE y decretos autonómicos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-xl font-semibold"
                >
                  Crear cuenta
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-white hover:bg-primary/20 text-lg px-8 py-6 rounded-xl font-semibold bg-transparent backdrop-blur-sm"
                >
                  Probar Botón de Emergencia Gratis
                </Button>
              </div>
              <p className="text-sm text-white/60">
                Sin tarjeta, sin compromiso. Botón de Emergencia gratis con 5 usos/mes.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <img
                src="/images/mujer-portada.png"
                alt="Profesora usando DocentIA con interfaz holográfica"
                className="relative rounded-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
            <Card className="bg-white overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/images/image-f7ilzpdPF1zewVCY5snGjZ0zhBr9Kl.png"
                  alt="Botón de emergencia - Envía rápidamente comunicaciones importantes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Botón de emergencia</h3>
                <p className="text-slate-600">Envía rápidamente comunicaciones importantes</p>
              </CardContent>
            </Card>

            {/* Feature 2 - Unidades Didácticas */}
            <Card className="bg-white overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/images/image-AFn1DwPHiuLFf4gRGx8rkZf331G3IH.png"
                  alt="Unidades didácticas - Prepara matererial de forma con facilidad"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Unidades didácticas</h3>
                <p className="text-slate-600">Prepara matererial de forma rápida con facilidad</p>
              </CardContent>
            </Card>

            {/* Feature 3 - Exámenes Automáticos con Rúbricas */}
            <Card className="bg-white overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/images/mujer-portada.png"
                  alt="Exámenes automáticos - Corrige examenes de forma eficiente"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Exámenes automáticos</h3>
                <p className="text-slate-600">Corrige exámenes y crea rúbricas de evaluación</p>
              </CardContent>
            </Card>
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
                  <h3 className="text-lg font-bold text-slate-900">Informes</h3>
                  <p className="text-sm text-slate-600">Boletines personalizados</p>
                </div>
              </CardContent>
            </Card>

            {/* Feature 6 - Generador de Ideas */}
            <Card className="bg-white/95 backdrop-blur border-2 border-slate-200 overflow-hidden group hover:border-primary/50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-5">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Generador de Ideas</h3>
                  <p className="text-sm text-slate-600">Propuestas creativas</p>
                </div>
              </CardContent>
            </Card>

            {/* Feature 7 - Problemas de Matemáticas */}
            <Card className="bg-white/95 backdrop-blur border-2 border-slate-200 overflow-hidden group hover:border-primary/50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-5">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Calculator className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Problemas de Matemáticas</h3>
                  <p className="text-sm text-slate-600">Genera ejercicios personalizados</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="precios" className="container mx-auto px-6 py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="space-y-6 mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">Planes adaptados a ti</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Elige el plan que mejor se ajuste a tus necesidades. Sin compromisos, cancela cuando quieras
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Plan Gratuito */}
          <Card className="bg-card border-border/50 hover:border-primary/30 transition-all">
            <CardContent className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Plan Gratuito</h3>
                <p className="text-muted-foreground text-sm">Perfecto para empezar</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">0€</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
                <p className="text-sm text-muted-foreground">Gratis para siempre</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Botón de Emergencia: 5 usos/mes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Acceso limitado a funciones básicas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Compatible con LOMLOE</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full bg-transparent">
                Comenzar gratis
              </Button>
            </CardContent>
          </Card>

          {/* Plan Profesional */}
          <Card className="bg-gradient-to-br from-primary/15 to-primary/5 border-primary/50 hover:border-primary transition-all relative overflow-hidden shadow-lg">
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
              Más popular
            </div>
            <CardContent className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Plan Profesional</h3>
                <p className="text-muted-foreground text-sm">Para docentes activos</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">12€</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
                <p className="text-sm text-muted-foreground">Facturado mensualmente</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">Todo del plan gratuito, más:</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Usos ilimitados de todas las funciones</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Generación de unidades didácticas completas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Soporte prioritario</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Actualizaciones automáticas</span>
                </li>
              </ul>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Empezar ahora</Button>
            </CardContent>
          </Card>

          {/* Plan Centro Educativo */}
          <Card className="bg-card border-border/50 hover:border-primary/30 transition-all">
            <CardContent className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Plan Centro</h3>
                <p className="text-muted-foreground text-sm">Para todo el claustro</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">Personalizado</span>
                </div>
                <p className="text-sm text-muted-foreground">Según número de docentes</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">Todo del plan profesional, más:</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Licencias para todo el centro</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Formación personalizada</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Soporte dedicado</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Facturación centralizada</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full bg-transparent">
                Contactar
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="container mx-auto px-6 py-20">
        <div className="space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">Lo que dicen de DocentIA</h2>
          <p className="text-xl text-muted-foreground text-pretty">Opiniones de docentes de Extremadura</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <Card className="bg-card border-border/50 hover:border-primary/30 transition-colors">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img src="/images/image.png" alt="Carmen P." className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-foreground/90 text-pretty leading-relaxed">
                    "Siempre he querido tener para aligerar mis métodos de enseñanza. DocentIA me ha cambiado la forma
                    de trabajar."
                  </p>
                </div>
              </div>
              <div>
                <p className="font-bold text-foreground">Carmen P.</p>
                <p className="text-sm text-muted-foreground">Maestra de vocación - Cáceres</p>
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
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-xl px-12 py-8 rounded-xl font-bold shadow-lg shadow-primary/30"
              >
                Crear cuenta gratis
              </Button>
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
