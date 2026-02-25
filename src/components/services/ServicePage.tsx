"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import type { ServiceDef, ServiceKey } from "@/lib/services";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

// Import service page images
import rentalPageImage from "@/assets/services/Rental-Page.png";
import salesPageImage from "@/assets/services/Sales-Page.png";
import repairingPageImage from "@/assets/services/Repearing-Page.png";
import installationPageImage from "@/assets/services/Installation-Page.png";
import engineeringPageImage from "@/assets/services/Engineering-Page.png";
import licensingPageImage from "@/assets/services/Licenseing-Page.png";

// Map service slugs to their corresponding page images
const servicePageImages: Record<ServiceKey, typeof rentalPageImage> = {
  rental: rentalPageImage,
  sales: salesPageImage,
  repair: repairingPageImage,
  installation: installationPageImage,
  engineering: engineeringPageImage,
  licensing: licensingPageImage,
};

export default function ServicePage({ service }: { service: ServiceDef }) {
  return (
    <div className="w-full">
      <Header />
      
      <section className="w-full">
        {/* Banner — image only, responsive, no text overlay / no grey background */}
        <div className="relative w-full min-h-[40vh] sm:min-h-[46vh] lg:min-h-[54vh] overflow-hidden bg-transparent">
          <Image
            src={service.image}
            alt={`${service.title} banner`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Title, underline, and tagline below banner */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12">
          <div className="max-w-3xl">
            <motion.h1 
              className="font-bold text-[#0C1D48] text-3xl sm:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {service.title}
            </motion.h1>
            <motion.div 
              className="mt-2 h-1 bg-[#0C1D48] w-40 sm:w-48 lg:w-56"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
            <motion.p 
              className="mt-4 text-gray-700 text-base sm:text-lg lg:text-xl"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              {service.tagline}
            </motion.p>
          </div>
        </div>

        {/* Body */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-35 items-start">
            {/* Text Content - Left Column */}
            <article className="w-full max-w-3xl lg:max-w-none">
              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                {service.body.map((p, i) => (
                  <p key={i} className="text-base sm:text-lg leading-relaxed text-gray-700">
                    {p}
                  </p>
                ))}
              </div>
            </article>

            {/* Image - Right Column */}
            <div className="w-full flex items-start justify-end lg:justify-start lg:-mt-25">
              <div className="relative w-full max-w-xl h-auto">
                <Image
                  src={servicePageImages[service.slug]}
                  alt={`${service.title} illustration`}
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-3xl shadow-lg object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
