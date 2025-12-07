"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Zap, BookOpen, ClipboardList, Lightbulb, BarChart3, Cpu } from "lucide-react"

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

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden"
        style={{
          backgroundImage: "url('/fondo-circuitos.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1200 600"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <filter id="heroGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background layer - distant, faint circuits */}
          <g opacity="0.2" transform="scale(0.8)">
            <line x1="100" y1="100" x2="400" y2="150" stroke="#00d9ff" strokeWidth="0.8" />
            <line x1="400" y1="150" x2="600" y2="100" stroke="#00d9ff" strokeWidth="0.8" />
            <line x1="600" y1="100" x2="900" y2="200" stroke="#00d9ff" strokeWidth="0.8" />
            <line x1="900" y1="200" x2="1000" y2="400" stroke="#00d9ff" strokeWidth="0.8" />
          </g>

          {/* Middle layer - medium circuits */}
          <g opacity="0.4">
            <line x1="120" y1="80" x2="480" y2="180" stroke="#00d9ff" strokeWidth="1.2" />
            <line x1="480" y1="180" x2="720" y2="120" stroke="#00d9ff" strokeWidth="1.2" />
            <line x1="720" y1="120" x2="1080" y2="240" stroke="#00d9ff" strokeWidth="1.2" />
            <line x1="200" y1="280" x2="550" y2="320" stroke="#00d9ff" strokeWidth="1.2" />
            <line x1="550" y1="320" x2="850" y2="380" stroke="#00d9ff" strokeWidth="1.2" />
            <line x1="850" y1="380" x2="1100" y2="480" stroke="#00d9ff" strokeWidth="1.2" />
          </g>

          {/* Front layer - bright, prominent circuits */}
          <g opacity="0.7" filter="url(#heroGlow)">
            <line x1="150" y1="60" x2="550" y2="200" stroke="#00d9ff" strokeWidth="1.5" />
            <line x1="550" y1="200" x2="800" y2="140" stroke="#00d9ff" strokeWidth="1.5" />
            <line x1="800" y1="140" x2="1150" y2="280" stroke="#00d9ff" strokeWidth="1.5" />
            <line x1="250" y1="300" x2="600" y2="350" stroke="#00d9ff" strokeWidth="1.5" />
            <line x1="600" y1="350" x2="950" y2="420" stroke="#00d9ff" strokeWidth="1.5" />
            <line x1="950" y1="420" x2="1150" y2="520" stroke="#00d9ff" strokeWidth="1.5" />

            {/* Brighter connecting nodes in front layer */}
            <circle cx="550" cy="200" r="8" fill="#00d9ff" opacity="0.9" />
            <circle cx="800" cy="140" r="7" fill="#00d9ff" opacity="0.85" />
            <circle cx="600" cy="350" r="8" fill="#00d9ff" opacity="0.9" />
            <circle cx="950" cy="420" r="7" fill="#00d9ff" opacity="0.85" />
          </g>

          {/* Glowing point lights scattered randomly */}
          <g filter="url(#heroGlow)" opacity="0.8">
            <circle cx="300" cy="150" r="6" fill="#00d9ff" />
            <circle cx="700" cy="250" r="5" fill="#00d9ff" />
            <circle cx="1000" cy="150" r="6" fill="#00d9ff" />
            <circle cx="450" cy="400" r="5" fill="#00d9ff" />
            <circle cx="800" cy="480" r="6" fill="#00d9ff" />
            <circle cx="200" cy="500" r="5" fill="#00d9ff" />
          </g>
        </svg>

        <div className="absolute top-8 right-8 bg-white rounded-2xl p-4 shadow-lg z-20 hidden md:flex">
          <img src="/fondo%20docentia.PNG" alt="DocentIA Hero" className="w-80 h-auto rounded-lg" />
        </div>

        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance leading-tight">
                Empieza gratis con <span className="text-primary">DocentIA</span>
              </h1>
              <p className="text-lg text-muted-foreground text-balance">
                Simplifica tu trabajo y gana tiempo para lo importante
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 text-base"
                >
                  <Link href="/registro">Crea tu cuenta</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 rounded-full px-8 h-12 text-base bg-transparent"
                >
                  <Link href="/generadores/boton-emergencia">Prueba gratis</Link>
                </Button>
              </div>
            </div>

            <div className="relative flex justify-center items-center">{/* SVG Circuit lines background */}</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="funciones"
        className="py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-[#1a3a52] via-[#2a4a6a] to-[#0a1628]"
      >
        <div className="container max-w-7xl mx-auto">
          <div className="space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">Funciones</h2>
            <p className="text-muted-foreground text-lg">
              Con DocentIA optimizas tu labor con varias herramientas que agilizan tu trabajo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Link
                  key={feature.id}
                  href={feature.href}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary transition-all hover:shadow-2xl"
                >
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-card-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-[#0a1628]">
        <div className="container max-w-7xl mx-auto">
          <div className="space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">Lo que dicen de DocentIA</h2>
            <p className="text-muted-foreground text-lg">Opiniones de nuestros usuarios</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Siempre he queido tener rá aliger mis metmdiasio ensensa.",
                author: "Carmen P.",
                role: "Maestra de vocación",
                avatar: "/teacher-avatar.jpg",
              },
              {
                quote: "He puedo crear ahorralo horario y contenidl dcer muy bonsñjio con facilidad",
                author: "Javier L.",
                role: "Profesor",
                avatar: "/professor-avatar.jpg",
              },
              {
                quote: "He pasedo de hacer muis taras a tener a plataforma que lo simplificara.",
                author: "Beatriz S.",
                role: "Phosphor ta",
                avatar: "/educator-avatar.jpg",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-card-foreground">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planes" className="py-20 md:py-32 px-4 md:px-6 bg-[#0a1628]">
        <div className="container max-w-7xl mx-auto">
          <div className="space-y-4 mb-16 text-center">
            <h2 className="text-4xl font-bold text-foreground">Planes de DocentIA</h2>
            <p className="text-muted-foreground text-lg">Elige el plan que mejor se adapte a tus necesidades</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Prueba Gratis",
                price: "Gratis",
                duration: "7 días",
                features: [
                  "Acceso a todas las herramientas",
                  "Hasta 50 generaciones por mes",
                  "Soporte por email",
                  "Exportar en PDF",
                  "Sin tarjeta de crédito",
                ],
                highlighted: false,
              },
              {
                name: "Plan Profesional",
                price: "29€",
                duration: "/mes",
                features: [
                  "Acceso ilimitado a todas las herramientas",
                  "Generaciones ilimitadas",
                  "Soporte prioritario",
                  "Exportar en múltiples formatos",
                  "Personalización avanzada",
                  "Analytics y reportes detallados",
                ],
                highlighted: true,
              },
              {
                name: "Plan Institucional",
                price: "Personalizado",
                duration: "según necesidades",
                features: [
                  "Todas las características del Plan Profesional",
                  "Cuentas ilimitadas para docentes",
                  "Gestión centralizada",
                  "Soporte dedicado 24/7",
                  "Integración con sistemas escolares",
                  "Formación y capacitación incluida",
                ],
                highlighted: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl border p-8 space-y-6 transition-all ${
                  plan.highlighted ? "border-primary bg-primary/10 shadow-2xl scale-105" : "border-border bg-card"
                }`}
              >
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.duration}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full rounded-full h-12 ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-background border border-border text-foreground hover:bg-muted"
                  }`}
                >
                  <Link href="/registro">
                    {plan.name === "Plan Institucional" ? "Contactar ventas" : "Empezar ahora"}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 px-4 md:px-6 bg-[#0a1628]">
        <div className="container max-w-7xl mx-auto">
          <div className="space-y-4 mb-16 text-center">
            <h2 className="text-4xl font-bold text-foreground">Preguntas Frecuentes</h2>
            <p className="text-muted-foreground text-lg">Resolvemos tus dudas sobre DocentIA</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "¿Puedo probar DocentIA antes de pagar?",
                answer:
                  "Por supuesto. Ofrecemos un período de prueba gratuito de 7 días con acceso a todas nuestras herramientas. No necesitas introducir tu tarjeta de crédito.",
              },
              {
                question: "¿Cómo funciona el Botón de Emergencia?",
                answer:
                  "El Botón de Emergencia te permite enviar comunicaciones rápidas y urgentes a tus estudiantes. Es ideal para cambios de última hora o situaciones que requieren atención inmediata.",
              },
              {
                question: "¿Puedo usar DocentIA con mi grupo de estudiantes?",
                answer:
                  "Sí, los Planes Profesional e Institucional ofrecen opciones para gestionar múltiples grupos y estudiantes. Consulta con nuestro equipo de ventas para planes personalizados.",
              },
              {
                question: "¿Qué formatos de exportación ofrece DocentIA?",
                answer:
                  "Ofrecemos exportación a PDF, Word, Excel y Google Sheets. En el Plan Institucional hay opciones adicionales de integración con sistemas educativos.",
              },
              {
                question: "¿Hay soporte técnico disponible?",
                answer:
                  "Sí, ofrecemos soporte por email en todos los planes. El Plan Profesional incluye soporte prioritario, y el Institucional ofrece soporte 24/7 dedicado.",
              },
              {
                question: "¿Puedo cancelar mi suscripción en cualquier momento?",
                answer:
                  "Por supuesto. Puedes cancelar tu suscripción en cualquier momento sin penalizaciones. Los cambios se aplicarán al final de tu ciclo de facturación.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 space-y-3">
                <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">¿No encuentras tu pregunta?</p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12">
              <Link href="mailto:soporte@docentia.com">Contactar soporte</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
