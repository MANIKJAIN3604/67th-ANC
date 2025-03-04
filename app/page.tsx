"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-black text-white overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          style={{ backgroundImage: "url('/Group 2.png')" }} // Replace with your hero image
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            67<sup>th</sup> ANC
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-12 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The National Association of Student of Architecture
          </motion.p>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <StatCard number="6000+" label="DELEGATES" />
            <StatCard number="65+" label="EVENTS PER YEAR" />
            <StatCard number="30+" label="COLLABORATIONS" />
            <StatCard number="350+" label="ASSOCIATE COLLEGES" />
          </motion.div>
        </div>
      </section>

      {/* Annual Convention Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ANNUAL NASA CONVENTION
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Largest gathering of Future Architects nationwide
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-primary mr-2" />
                  Enriching workshops
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-primary mr-2" />
                  Keynote Speakers
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-primary mr-2" />
                  Seminars
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-primary mr-2" />
                  Cultural Events
                </li>
              </ul>
              <Link
                href="/events"
                className="inline-block mt-8 text-primary hover:text-primary/80 transition-colors"
              >
                <span className="flex items-center">
                  View all events
                  <ArrowRight className="h-5 w-5 ml-2" />
                </span>
              </Link>
            </motion.div>
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <StatCard number="350+" label="Universities and Colleges" />
              <StatCard number="1000+" label="Professional Architects" />
              <StatCard number="5000+" label="Future Architects" />
              <StatCard number="6000+" label="Footfall" />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <Card className="p-6 text-center bg-black/50 border-gray-800 hover:border-primary/50 transition-colors">
      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
        {number}
      </h3>
      <p className="text-sm text-gray-400">{label}</p>
    </Card>
  );
}
