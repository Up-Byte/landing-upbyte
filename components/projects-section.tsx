import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma de comercio electrónico completa con panel de administración, gestión de inventario y pasarela de pagos integrada.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "Web Development",
  },
  {
    title: "App de Gestión Empresarial",
    description:
      "Aplicación móvil para gestión de recursos humanos, control de asistencia y comunicación interna empresarial.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React Native", "Firebase", "TypeScript"],
    category: "Mobile App",
  },
  {
    title: "Sistema de Analytics",
    description:
      "Dashboard de análisis de datos en tiempo real con visualizaciones interactivas y reportes automatizados.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Vue.js", "Python", "MongoDB", "D3.js"],
    category: "Data Analytics",
  },
  {
    title: "Plataforma IoT",
    description: "Sistema de monitoreo y control de dispositivos IoT con alertas en tiempo real y análisis predictivo.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Next.js", "AWS", "MQTT", "InfluxDB"],
    category: "IoT Solution",
  },
]

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proyectos Destacados</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Algunos de nuestros proyectos más exitosos que demuestran nuestra experiencia y capacidad de innovación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-emerald-100 to-purple-100 flex items-center justify-center">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-emerald-600 border-emerald-600">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                <CardDescription className="text-gray-600">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="bg-black text-white">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver Demo
                  </Button>
                  <Button size="sm" variant="outline" className="bg-black text-white">
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
