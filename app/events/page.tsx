import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const events = [
  {
    title: "Keynote speakers",
    icon: "/image-removebg-preview (4) 1.png", // Replace with your icon
  },
  {
    title: "Masterclass",
    icon: "/image-removebg-preview (5) 1.png", // Replace with your icon
  },
  {
    title: "Seminars",
    icon: "/image-removebg-preview (7) 1.png", // Replace with your icon
  },
  {
    title: "Panel Discussion",
    icon: "/image-removebg-preview (8) 1.png", // Replace with your icon
  },
  {
    title: "Experience Zone",
    icon: "/image-removebg-preview (10) 1.png", // Replace with your icon
  },
  {
    title: "Workshops",
    icon: "/image-removebg-preview (6) 1.png", // Replace with your icon
  },
  {
    title: "Fashion Show",
    icon: "/image-removebg-preview (11) 1.png", // Replace with your icon
  },
  {
    title: "Dance",
    icon: "/image-removebg-preview (13) 1.png", // Replace with your icon
  },
  {
    title: "Battle of Bands",
    icon: "/image-removebg-preview (14) 1.png", // Replace with your icon
  },
  {
    title: "Food and Non Food Stalls",
    icon: "/image-removebg-preview (15) 1.png", // Replace with your icon
  },
]

export default function EventsPage() {
  return (
    <main className="pt-24 min-h-screen bg-black">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">EVENTS AND ACTIVITIES</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {events.map((event) => (
            <Card key={event.title} className="bg-black/50 border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="mb-4 relative h-24 w-24 mx-auto">
                  <Image src={event.icon || "/placeholder.svg"} alt={event.title} fill className="object-contain" />
                </div>
                <h3 className="font-medium">{event.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12 text-primary text-xl font-bold">
          200+ ACTIVITIES AND EXPERIENCES ALL OVER UNIVERSITY CAMPUS
        </div>
      </div>
    </main>
  )
}

