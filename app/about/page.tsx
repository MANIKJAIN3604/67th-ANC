"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const stats = [
  { number: "4", label: "Days" },
  { number: "350+", label: "Universities and Colleges" },
  { number: "1000+", label: "Professional Architects and Designers" },
  { number: "5000+", label: "Future Architects" },
  { number: "6000+", label: "Footfall" },
  { number: "3", label: "Cultural Trophies" },
];

const benefits = [
  {
    title: "Gain Exposure",
    description:
      "amongst a large audience of future architects, professional, and industry leaders nationwide.",
  },
  {
    title: "Brand familiarity",
    description: "for the future architects entering the industry",
  },
  {
    title: "Forge connections",
    description: "with future leaders of Architectures",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-24 min-h-screen bg-black">
      <div className="container mx-auto px-4">
        <section className="mb-20">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ABOUT US
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-primary">
                WE NASA INDIA
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  The National Association of Student of Architecture (NASA
                  India) is the{" "}
                  <span className="text-primary font-semibold">Largest</span>{" "}
                  and <span className="text-primary font-semibold">Oldest</span>{" "}
                  architectural student's body in the world.
                </p>
                <p className="text-xl font-semibold">
                  For the students, By the students, Of the Students.
                </p>
                <p>
                  Non Government, Non Profitable Organization dedicated to
                  promoting architectural education and fostering collaboration
                  among future architects.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[400px] rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Image
                src="/aboutus.png" // Replace with your about us image
                alt="NASA India Community"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            NASA BY THE NUMBERS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center bg-black/50 border-gray-800">
                  <h3 className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12">Why Join NASA?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="p-6 h-full bg-black/50 border-gray-800">
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
