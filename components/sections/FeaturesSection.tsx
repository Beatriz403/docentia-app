// app/components/sections/FeaturesSection.tsx
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Target, FileText, Lightbulb, Calculator } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      href: "/generadores/boton-emergencia",
      title: "Botón de emergencia",
      description: "Genera actividades en 30 segundos para situaciones urgentes",
      image: "/images/emergency-button-teacher.jpg",
    },
    {
      href: "/generadores/unidades-didacticas",
      title: "Unidades didácticas",
      description: "Prepara material completo con facilidad",
      image: "/images/learning-units-preparation.jpg",
    },
    {
      href: "/generadores/examenes-automaticos",
      title: "Exámenes automáticos",
      description: "Genera exámenes y crea rúbricas de evaluación",
      image: "/images/automatic-exam-grading.jpg",
    },
  ]

  return (
    <section id="funciones" className="py-20 bg-gradient-to-b from-slate-700 to-slate-600">
      <div className="container mx-auto px-6">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Funciones</h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Con DocentIA optimizas tu labor con varias herramientas que agilizan tu trabajo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Link key={feature.href} href={feature.href}>
              <Card className="bg-white overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer h-full">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

