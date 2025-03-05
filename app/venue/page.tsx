// "use client";

// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { MapPin, Calendar, Users, Clock } from "lucide-react";
// import Image from "next/image";

// const venueDetails = [
//   {
//     icon: MapPin,
//     title: "Location",
//     description: "School of Planning and Architecture, IP Estate, New Delhi",
//   },
//   {
//     icon: Calendar,
//     title: "Event Duration",
//     description: "4 Days of Architecture Excellence",
//   },
//   {
//     icon: Users,
//     title: "Capacity",
//     description: "6000+ delegates from 350+ colleges",
//   },
//   {
//     icon: Clock,
//     title: "Timings",
//     description: "9:00 AM - 6:00 PM daily",
//   },
// ];

// const facilities = [
//   "State-of-the-art auditorium",
//   "Multiple workshop spaces",
//   "Exhibition areas",
//   "Food court",
//   "Outdoor activity zones",
//   "Meeting rooms",
//   "Performance stages",
//   "Technical support",
// ];

// export default function VenuePage() {
//   return (
//     <main className="pt-24 min-h-screen bg-black">
//       <div className="container mx-auto px-4">
//         <motion.h1
//           className="text-4xl md:text-5xl font-bold mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           VENUE
//         </motion.h1>

//         <div className="grid lg:grid-cols-2 gap-12 mb-20">
//           <motion.div
//             className="relative h-[400px] rounded-lg overflow-hidden"
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Image
//               src="/Untitled-5.png" // Replace with your venue image
//               alt="Venue"
//               width={800}
//               height={400}
//               className="object-cover"
//             />
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {venueDetails.map((detail, index) => (
//               <motion.div
//                 key={detail.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <Card className="h-full bg-black/50 border-gray-800">
//                   <CardContent className="p-6">
//                     <detail.icon className="h-8 w-8 text-primary mb-4" />
//                     <h3 className="text-xl font-bold mb-2">{detail.title}</h3>
//                     <p className="text-gray-300">{detail.description}</p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         <section className="mb-20">
//           <motion.h2
//             className="text-3xl font-bold mb-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             Venue Facilities
//           </motion.h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {facilities.map((facility, index) => (
//               <motion.div
//                 key={facility}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <Card className="h-full bg-black/50 border-gray-800">
//                   <CardContent className="p-6">
//                     <p className="text-lg font-medium">{facility}</p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         <section className="mb-20">
//           <motion.h2
//             className="text-3xl font-bold mb-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             Event Spaces
//           </motion.h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[1, 2, 3].map((space) => (
//               <motion.div
//                 key={space}
//                 className="relative h-[250px] rounded-lg overflow-hidden"
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: space * 0.2 }}
//               >
//                 <Image
//                   src={`/images/venue/event-space-${space}.jpg`} // Replace with your event space images
//                   alt={`Event Space ${space}`}
//                   fill
//                   className="object-cover"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Users, Clock } from "lucide-react";
import Image from "next/image";

const venueDetails = [
  {
    icon: MapPin,
    title: "Location",
    description: "School of Planning and Architecture, IP Estate, New Delhi",
  },
  {
    icon: Calendar,
    title: "Event Duration",
    description: "4 Days of Architecture Excellence",
  },
  {
    icon: Users,
    title: "Capacity",
    description: "6000+ delegates from 350+ colleges",
  },
  {
    icon: Clock,
    title: "Timings",
    description: "9:00 AM - 6:00 PM daily",
  },
];

const facilities = [
  "State-of-the-art auditorium",
  "Multiple workshop spaces",
  "Exhibition areas",
  "Food court",
  "Outdoor activity zones",
  "Meeting rooms",
  "Performance stages",
  "Technical support",
];

const eventSpaces = [
  "/events/robopark.jpeg",
  "/events/unipolis.jpg",
  "/events/amphitheatre.jpg",
];

export default function VenuePage() {
  return (
    <main className="pt-24 min-h-screen bg-black">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          VENUE
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            className="relative h-[400px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/Untitled-5.png"
              alt="Venue"
              width={800}
              height={400}
              className="object-cover"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {venueDetails.map((detail, index) => (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-black/50 border-gray-800">
                  <CardContent className="p-6">
                    <detail.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">{detail.title}</h3>
                    <p className="text-gray-300">{detail.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <section className="mb-20">
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Venue Facilities
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-black/50 border-gray-800">
                  <CardContent className="p-6">
                    <p className="text-lg font-medium">{facility}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Event Spaces
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventSpaces.map((space, index) => (
              <motion.div
                key={space}
                className="relative h-[250px] rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Image
                  src={space}
                  alt={`Event Space ${index}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
