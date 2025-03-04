"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react"

const socialStats = [
  {
    platform: "Instagram",
    followers: "62k+",
    label: "Instagram Followers",
    icon: Instagram,
  },
  {
    platform: "Facebook",
    followers: "40k+",
    label: "Growing Facebook Community",
    icon: Facebook,
  },
  {
    platform: "Linkedin",
    followers: "17k+",
    label: "LinkedIn Followers",
    icon: Linkedin,
  },
  {
    platform: "Youtube",
    followers: "7.5k+",
    label: "Thriving Youtube Community",
    icon: Youtube,
  },
]

const collaborations = [
  { name: "hudco", logo: "/image 63.png" },
  { name: "Council of Architecture", logo: "/image 62.png" },
  { name: "ISOLA", logo: "/image 58.png" },
  { name: "INTACH", logo: "/image 56.png" },
  { name: "Urban Design Collective", logo: "/image 55.png" },
  { name: "The Living City", logo: "/image 54.png" },
  { name: "Hunnarshala Foundation", logo: "/image 53.png" },
  { name: "Archicrafts", logo: "/image 52.png" },
  { name: "Renderpub", logo: "/image 51.png" },
  { name: "ICOMOS", logo: "/image 50.png" },
  { name: "Thinkering", logo: "/image 49.png" },
  { name: "Onestox", logo: "/image 48.png" },
  { name: "UNESCO", logo: "/image 47.png" },
  { name: "University of Westminster", logo: "/image 46.png" },
  { name: "ADI", logo: "/image 45.png" },
  { name: "NDDC", logo: "/image 44.png" },
]

export default function CollaborationsPage() {
  return (
    <main className="pt-24 min-h-screen bg-black">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          NASA Collaborations - PAST and PRESENT
        </motion.h1>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-20">
          {collaborations.map((collab, i) => (
            <motion.div
              key={collab.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Card className="p-4 bg-black/50 border-gray-800">
                <div className="relative h-20 w-full">
                  <Image
                    src={collab.logo || "/placeholder.svg"}
                    alt={`${collab.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          OUR SOCIAL MEDIA
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {socialStats.map((social, index) => (
            <motion.div
              key={social.platform}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-black/50 border-gray-800">
                <div className="flex items-center space-x-4">
                  <social.icon className="h-8 w-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold">{social.followers}</div>
                    <div className="text-sm text-gray-400">{social.label}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

