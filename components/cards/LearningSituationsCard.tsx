import { Card, CardContent } from "@/components/ui/card"
import { Target } from "lucide-react"

export function LearningSituationsCard() {
  return (
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
  )
}
