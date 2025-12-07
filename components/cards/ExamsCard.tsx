import { Card, CardContent } from "@/components/ui/card"
import { ClipboardList } from "lucide-react"
import Link from "next/link"

export function ExamsCard() {
  return (
    <Link href="https://docentia-frontend.vercel.app" className="group">
      <Card className="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary transition-all hover:shadow-2xl">
        <div className="relative">
          <img
            src="/images/mujer-portada.png"
            alt="Exámenes automáticos"
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-6 space-y-3">
          <h3 className="text-2xl font-bold text-card-foreground">Exámenes automáticos 📝</h3>
          <p className="text-muted-foreground">Genera exámenes y crea rúbricas de evaluación</p>
        </CardContent>
      </Card>
    </Link>
  )
}
