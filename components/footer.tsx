import { Separator } from "@/components/ui/separator"
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-emerald-500 rounded-lg">
                <Zap className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold">
                Up<span className="text-emerald-400">Byte</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Transformamos tu negocio con soluciones tecnológicas innovadoras y de alta calidad.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 cursor-pointer transition-colors">
                <Linkedin className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 cursor-pointer transition-colors">
                <Twitter className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 cursor-pointer transition-colors">
                <Github className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-emerald-400 cursor-pointer">Desarrollo Web</li>
              <li className="hover:text-emerald-400 cursor-pointer">Apps Móviles</li>
              <li className="hover:text-emerald-400 cursor-pointer">Soluciones Cloud</li>
              <li className="hover:text-emerald-400 cursor-pointer">Consultoría IT</li>
              <li className="hover:text-emerald-400 cursor-pointer">Ciberseguridad</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-emerald-400 cursor-pointer">Sobre nosotros</li>
              <li className="hover:text-emerald-400 cursor-pointer">Proyectos</li>
              <li className="hover:text-emerald-400 cursor-pointer">Testimonios</li>
              <li className="hover:text-emerald-400 cursor-pointer">Blog</li>
              <li className="hover:text-emerald-400 cursor-pointer">Carreras</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>contacto@upbyte.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+34 900 123 456</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Madrid, España</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>&copy; 2024 UpByte. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-emerald-400 cursor-pointer">Política de Privacidad</span>
            <span className="hover:text-emerald-400 cursor-pointer">Términos de Servicio</span>
            <span className="hover:text-emerald-400 cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
