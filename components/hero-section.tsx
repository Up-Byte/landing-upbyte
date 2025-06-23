import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2">
            <div className="p-3 bg-emerald-500 rounded-lg">
              <Zap className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">
              Up<span className="text-emerald-400">Byte</span>
            </h1>
          </div>
        </div>

        <h2 className="text-xl md:text-3xl font-light mb-6 max-w-4xl mx-auto">
          Transformamos tu negocio con soluciones tecnológicas innovadoras
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Consultora IT especializada en desarrollo de software, transformación digital y soluciones tecnológicas a
          medida para empresas de todos los tamaños.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
            Conoce nuestros servicios
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900"
          >
            <Code className="mr-2 h-5 w-5" />
            Ver proyectos
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" />
    </section>
  )
}
