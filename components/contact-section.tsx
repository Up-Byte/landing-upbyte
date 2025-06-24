import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contacta con nosotros</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Nos encantaría conocer más sobre tus necesidades y cómo podemos ayudarte a
            alcanzar tus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Envíanos un mensaje</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Nombre" />
                  <Input placeholder="Apellido" />
                </div>
                <Input placeholder="Email" type="email" />
                <Input placeholder="Empresa" />
                <Input placeholder="Teléfono" />
                <Textarea placeholder="Cuéntanos sobre tu proyecto..." rows={4} />
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar mensaje
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">up.byte1@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Teléfono</div>
                    <div className="text-gray-600">+54 9 11 5720 0927</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Oficina</div>
                    <div className="text-gray-600">Buenos Aires, Argentina</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Horario de atención</h4>
              <div className="text-gray-600 space-y-1">
                <div>Lunes - Viernes: 9:00 - 18:00</div>
                <div>Sábados: 10:00 - 14:00</div>
                <div>Domingos: Cerrado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
