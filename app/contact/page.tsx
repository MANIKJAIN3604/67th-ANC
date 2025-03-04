import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="pt-24 min-h-screen bg-black">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">Contact Us</h1>

        <Card className="mb-8 bg-black/50 border-gray-800">
          <CardHeader>
            <CardTitle>Address</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">
              National Association of Student of Architecture, School of Planning and Architecture, Dept of
              Architecture, 6, Block B, IP Estate, New Delhi 110002
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-black/50 border-gray-800">
            <CardHeader>
              <CardTitle>Unit Secretary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>Z187@nasaindia.co</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91-63006 22169</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-gray-800">
            <CardHeader>
              <CardTitle>ANC Marketing Coordinator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91-89187 10268</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4 text-gray-300">
          <h2 className="text-xl font-bold mb-4">Know more about:</h2>
          <p>
            <span className="text-primary font-bold">NASA</span>:{" "}
            <a
              href="https://www.nasaindia.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              https://www.nasaindia.co/
            </a>
          </p>
          <p>
            <span className="text-primary font-bold">LPU</span>:{" "}
            <a href="https://www.lpu.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              https://www.lpu.in/
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}

