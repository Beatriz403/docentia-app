import { Card, CardContent } from "@/components/ui/card"
import { Zap } from "lucide-react"
import Link from "next/link"

export function EmergencyButtonCard() {
  return (
    <Link href="/generadores/boton-emergencia" className="group">
      <Card className="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary transition-all hover:shadow-2xl">
        <div className="relative">
          <img
            src="/emergency-button-teacher.jpg"
            alt="Botón de emergencia"
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Zap className="w-5 h-5 text-primary" />
          </div>
        </div>
        <CardContent className="p-6 space-y-3">
          <h3 className="text-xl font-bold text-card-foreground">Botón de emergencia</h3>
          <p className="text-muted-foreground">Envía rápidamente comunicaciones importantes</p>
        </CardContent>
      </Card>
    </Link>
  )
}
