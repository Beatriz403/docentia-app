import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="container max-w-7xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-primary to-blue-400 rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-xs">D</span>
            </div>
            <span className="font-semibold text-primary">DocentIA</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 DocentIA. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm hover:text-primary transition-colors">
              Privacidad
            </Link>
            <Link href="#" className="text-sm hover:text-primary transition-colors">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
