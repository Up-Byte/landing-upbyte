import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Target } from "lucide-react"

const stats = [
  { icon: Users, label: "Clientes Satisfechos", value: "50+" },
  { icon: Award, label: "Proyectos Completados", value: "120+" },
  { icon: Clock, label: "Años de Experiencia", value: "8+" },
  { icon: Target, label: "Tasa de Éxito", value: "98%" },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sobre UpByte</h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                Somos una consultora IT especializada en transformación digital y desarrollo de soluciones tecnológicas
                innovadoras. Con más de 8 años de experiencia, hemos ayudado a empresas de todos los tamaños a alcanzar
                sus objetivos mediante la tecnología.
              </p>
              <p>
                Nuestro equipo está formado por desarrolladores senior, arquitectos de software y consultores
                especializados que trabajan con las últimas tecnologías y metodologías ágiles para entregar soluciones
                de alta calidad.
              </p>
              <p>
                Creemos en la importancia de entender profundamente las necesidades de nuestros clientes para ofrecer
                soluciones personalizadas que generen valor real y impulsen el crecimiento del negocio.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
