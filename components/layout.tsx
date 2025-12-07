import { ReactNode } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Cabecera */}
      <Header />

      {/* Contenido principal */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  )
}
