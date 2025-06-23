import { Badge } from "@/components/ui/badge"

const technologies = {
  frontend: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "Python", "Java", "C#", ".NET", "Express.js"],
  mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
  database: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
  cloud: ["AWS", "Azure", "Google Cloud", "Vercel", "Docker", "Kubernetes"],
  tools: ["Git", "Jenkins", "Jira", "Figma", "Postman", "VS Code"],
}

export function TechStackSection() {
  return (
    <section id="tecnologias" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tecnologías y Stack</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trabajamos con las tecnologías más modernas y robustas del mercado para garantizar soluciones de alta
            calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 capitalize">
                {category === "frontend"
                  ? "Frontend"
                  : category === "backend"
                    ? "Backend"
                    : category === "mobile"
                      ? "Mobile"
                      : category === "database"
                        ? "Base de Datos"
                        : category === "cloud"
                          ? "Cloud & DevOps"
                          : "Herramientas"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
