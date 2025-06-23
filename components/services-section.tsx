import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Cloud, Smartphone, Database, Shield, Cog } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Desarrollo de Software",
    description:
      "Aplicaciones web y móviles personalizadas con las últimas tecnologías y mejores prácticas de desarrollo.",
  },
  {
    icon: Cloud,
    title: "Soluciones Cloud",
    description: "Migración y optimización de infraestructura en la nube para mayor escalabilidad y eficiencia.",
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description:
      "Desarrollo de aplicaciones nativas y multiplataforma para iOS y Android con experiencia de usuario excepcional.",
  },
  {
    icon: Database,
    title: "Gestión de Datos",
    description: "Diseño e implementación de bases de datos, análisis de datos y soluciones de Business Intelligence.",
  },
  {
    icon: Shield,
    title: "Ciberseguridad",
    description: "Auditorías de seguridad, implementación de protocolos y protección contra amenazas digitales.",
  },
  {
    icon: Cog,
    title: "Consultoría IT",
    description:
      "Asesoramiento estratégico en tecnología para optimizar procesos y acelerar la transformación digital.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales para impulsar el crecimiento y la innovación en tu empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
