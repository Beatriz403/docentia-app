import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DocentIALogo } from "@/components/docentia-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { NetworkMesh } from "@/components/network-mesh"
import { Target, FileText, Lightbulb, Calculator, Check } from "lucide-react"
import { Header } from "@/components/Header"
import { FeaturesSection } from "@/components/sections/FeaturesSection"

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

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
                Compatible con LOMLOE y decretos autonómicos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/generadores/boton-emergencia">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-xl font-semibold w-full sm:w-auto"
                  >
                    Crea tu cuenta
                  </Button>
                </Link>
                <Link href="/generadores/boton-emergencia">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-white hover:bg-primary/20 text-lg px-8 py-6 rounded-xl font-semibold bg-transparent backdrop-blur-sm w-full sm:w-auto"
                  >
                    Prueba gratis
                  </Button>
                </Link>
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
      <FeaturesSection />

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

              <Link href="/generadores/boton-emergencia">
                <Button variant="outline" className="w-full">
                  Empezar gratis
                </Button>
              </Link>
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
                  <span className="text-5xl font-bold">10€</span>
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

              <Link href="/generadores/boton-emergencia">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Comenzar ahora
                </Button>
              </Link>
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
            {/* Testimonial Cards */}
            {[ 
              { img: "/images/teacher-avatar.jpg", name: "María G.", city: "Cáceres", text: "DocentIA me ha cambiado la vida. Lo que antes me llevaba horas ahora lo tengo en minutos. Increíble." },
              { img: "/images/professor-avatar.jpg", name: "Javier L.", city: "Badajoz", text: "El botón de emergencia me salvó cuando el sustituto no llegó. En 30 segundos tenía una actividad completa lista." },
              { img: "/images/educator-avatar.jpg", name: "Beatriz S.", city: "Mérida", text: "He pasado de hacer muchas tareas a tener una plataforma que lo simplifica todo. Ahorro horas cada semana." }
            ].map((t, i) => (
              <Card key={i} className="bg-card border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden flex-shrink-0">
                      <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground/90 text-pretty leading-relaxed">{t.text}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">Profesor/a - {t.city}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-6 py-20">
        <div className="space-y-6 mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">Preguntas frecuentes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Resolvemos tus dudas sobre DocentIA
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {[
            { q: "¿Necesito conocimientos técnicos para usar DocentIA?", a: "No, DocentIA está diseñado para ser intuitivo y fácil de usar. Solo necesitas saber lo que quieres crear y la plataforma genera el contenido por ti en segundos." },
            { q: "¿El contenido generado cumple con la LOMLOE?", a: "Sí, todo el contenido está actualizado según la LOMLOE y los decretos específicos de Extremadura. Puedes personalizarlo según tus necesidades específicas." },
            { q: "¿Puedo cancelar mi suscripción en cualquier momento?", a: "Sí, puedes cancelar tu suscripción cuando quieras sin penalizaciones. Si cancelas, seguirás teniendo acceso hasta el final del período de facturación." },
            { q: "¿Qué incluye el Botón de Emergencia gratuito?", a: "El plan gratuito incluye 5 usos al mes del Botón de Emergencia, que genera actividades completas en 30 segundos. Es perfecto para situaciones imprevistas o para probar la plataforma." },
            { q: "¿Ofrecen descuentos para centros educativos?", a: "Sí, ofrecemos planes personalizados para centros educativos con descuentos según el número de licencias. Contacta con nosotros para una propuesta a medida." },
            { q: "¿Mis datos están seguros?", a: "Absolutamente. Cumplimos con el RGPD y todas las normativas de protección de datos. Tus documentos y contenidos son privados y no se comparten con terceros." }
          ].map((item, i) => (
            <Card key={i} className="bg-card border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">{item.q}</h3>
                <p className="text-muted-foreground text-pretty">{item.a}</p>
              </CardContent>
            </Card>
          ))}
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
              <Link href="/generadores/boton-emergencia">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-xl px-12 py-8 rounded-xl font-bold shadow-lg shadow-primary/30"
                >
                  🚀 Empezar ahora gratis
                </Button>
              </Link>
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
        <div className="container mx-auto px-6 py-12 flex justify-between items-center">
          <DocentIALogo />
          <p className="text-sm text-muted-foreground">© 2025 DocentIA. Diseñado para docentes de Extremadura.</p>
        </div>
      </footer>
    </div>
  )
}
