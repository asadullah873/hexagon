'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { SERVICES } from '@/lib/services';

// Import hero assets
import backgroundImage from '@/assets/home-hero/background-image.jpg';
import hexagonWheel from '@/assets/home-hero/hexagone-wheel.png';
import altrexLogo from '@/assets/home-hero/altrex.png';
// import beeLogo from '@/assets/home-hero/bee.png';
// import betamaxLogo from '@/assets/home-hero/betamax.png';
// import bisomacLogo from '@/assets/home-hero/bisomac.png';
import rgcLogo from '@/assets/home-hero/rgc.png';
import tracelLogo from '@/assets/home-hero/tracel.png';
import skyClimberLogo from '@/assets/home-hero/Sky-Climber.png';
import powerClimberLogo from '@/assets/home-hero/Power-Climber.png';
import winSafeLogo from '@/assets/home-hero/Win-Safe.png';

const HomeHero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  
  // counts animation steps for rotation by 60°
  const [spinStep, setSpinStep] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  // Services array
  const services = useMemo(() => [
    "Rental", "Sales", "Repair", "Installation", "Engineering", "Licensing"
  ], []);

  // Helper function to get service slug from title
  const getServiceSlug = useCallback((title: string): string => {
    const service = Object.values(SERVICES).find(s => s.title === title);
    return service ? service.slug : title.toLowerCase();
  }, []);

  // Logo assets array - all nine brands in correct order
  const logos = useMemo(() => [
    // { src: beeLogo, alt: "BEE Access", name: "BEE Access" },
    // { src: betamaxLogo, alt: "Beta Max", name: "Beta Max" },
    // { src: bisomacLogo, alt: "BISOMAC", name: "BISOMAC" },
    { src: skyClimberLogo, alt: "Sky Climber", name: "Sky Climber" },
    { src: tracelLogo, alt: "Tractel", name: "Tractel" },
    { src: winSafeLogo, alt: "Win Safe", name: "Win Safe" },
    { src: altrexLogo, alt: "Altrex", name: "Altrex" },
    { src: rgcLogo, alt: "RGC Hosting", name: "RGC Hosting" },
    { src: powerClimberLogo, alt: "Power Climber", name: "Power Climber" },
    
  ], []);

  // Descriptions for each service (shown under the underlined heading)
  const descriptions = useMemo(
    () => ({
      Rental:
        "Explore the newest trends in property rentals.",
      Sales:
        "Get the latest trends and strategies in sales.",
      Repair:
        "Get the latest trends and strategies in repair.",
      Installation:
        "Learn about innovative installation techniques and tools.",
      Engineering:
        "Learn about innovative Engineering.",
      Licensing:
        "Stay informed about the latest licensing regulations and changes.",
    }),
    []
  );

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Animation interval
  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(() => {
      if (isInView) {
        setSpinStep((prev) => {
          const next = prev + 1;
          // service index still advances in lockstep with the spin
          const nextService = next % 6;
          setActiveIndex(nextService);
          return next;
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isInView, reducedMotion]);


  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const STEP_DEG = 30;
const BASE_DEG = 30; // If your PNG already has a vertical edge at 0°, set this to 0.
const rotation = reducedMotion ? 0 : -(BASE_DEG + spinStep * STEP_DEG);

  // Wheel animation variants
  const wheelVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: 0 },
    visible: { opacity: 1, scale: 1, rotate: rotation }
  };

  return (
    <section 
      ref={ref}
      className="relative w-full overflow-hidden min-h-[70vh] lg:min-h-[85vh]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Construction scaffolding background"
          fill
          className="object-cover brightness-50"
          sizes="100vw"
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh] lg:min-h-[75vh]">
            
            {/* Left Column - Text Content */}
            <motion.div 
              className="space-y-6 lg:space-y-8 order-2 lg:order-1 mt-4 lg:mt-0"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Company Title */}
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Hexagon Scaffolding – The Most Reliable Scaffold Services in New York, NY & New Jersey, NJ

              </motion.h1>

              {/* Description Paragraph */}
              <motion.p 
                className="text-lg sm:text-xl text-white leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                When it comes to safe, efficient and fully compliant scaffolding solutions, Hexagon Scaffolding stands as one of the leading scaffold service providers in New York, NY & New Jersey, NJ. We specialize in delivering Scaffold Services in New York for commercial construction, residential projects, industrial facilities and large scale developments. It is because of our dedication and commitment to quality, our engineering expertise and strict compliance with safety standards as set out by OSHA regulations that we stand as Local Scaffold Contractors New Jersey, NJ are the top choice for contractors and builders who genuinely comprehend the requirements of contemporary construction.
              </motion.p>

              {/* Logos Row */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 lg:gap-6">
                {logos.map((logo) => (
                  <div
                    key={logo.name}
                    className="relative h-12 sm:h-16 lg:h-20 flex items-center justify-center transition-all duration-300 hover:scale-105"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={80}
                      className="object-contain max-h-full max-w-full drop-shadow-sm"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Layout Wrapper */}
            <div className="relative overflow-visible order-1 lg:order-2">
              {/* Desktop Layout - Side by Side */}
              <div className="hidden lg:flex items-center justify-between gap-8 lg:gap-12 h-full">
                    {/* Service Heading - LEFT */}
                    <motion.div
                      className="flex-shrink-0 z-10 w-[20ch] sm:w-[22ch] lg:w-[24ch] xl:w-[26ch]"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      {/* Inline wrapper makes underline width match the heading text exactly */}
                      <div className="inline-block">
                        <Link href={`/services/${getServiceSlug(services[activeIndex])}`}>
                          <motion.h2
                            key={`title-${activeIndex}`} // re-animates on change
                            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white cursor-pointer hover:text-[#B0A8E0] transition-colors duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, delay: 0.15, ease: 'easeInOut' }}
                            aria-live="polite"
                            aria-label={`Current service: ${services[activeIndex]}`}
                          >
                            {services[activeIndex]}
                          </motion.h2>
                        </Link>

                        {/* Underline that auto-fits heading width */}
                        <motion.div
                          key={`underline-${activeIndex}`}
                          className="h-1 bg-white mt-2"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.35, ease: 'easeOut' }}
                          aria-hidden
                        />

                        {/* Per-service description */}
                        <motion.p
                          key={`desc-${activeIndex}`}
                          className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, delay: 0.1 }}
                        >
                          {descriptions[services[activeIndex] as keyof typeof descriptions]}
                        </motion.p>
                      </div>
                    </motion.div>

                {/* Hexagon Wheel - RIGHT (masked to show ~3 hexes) */}
                <div className="relative flex-shrink-0 w-[clamp(320px,30vw,640px)] h-[clamp(320px,30vw,640px)]">
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 right-[-36%] md:right-[-60%] lg:right-[-66%] xl:right-[-62%] 2xl:right-[-79%] w-[120%] h-[120%] xl:w-[125%] xl:h-[125%] 2xl:w-[128%] 2xl:h-[128%]"
                    initial="hidden"
                    animate="visible"
                    variants={wheelVariants}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    aria-hidden
                  >
                    <motion.div
                      className="absolute inset-0"
                      animate={{ rotate: rotation }}
                      transition={{ duration: reducedMotion ? 0 : 0.8, ease: "easeInOut" }}
                    >
                      <Image
                        src={hexagonWheel}
                        alt=""
                        fill
                        className="object-contain"
                        sizes="(min-width:1536px) 680px, (min-width:1280px) 620px, 560px"
                        priority={false}
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Mobile/Tablet Layout - Stacked */}
              <div className="flex flex-col items-center space-y-8 lg:hidden">
                    {/* Hexagon Wheel - TOP (moved to top on mobile) */}
                    <div className="relative z-0 pointer-events-none w-[clamp(240px,52vw,360px)] h-[clamp(240px,52vw,360px)] order-1 mt-8 mb-8">
                      <motion.div
                        className="absolute top-1/2 -translate-y-1/2 right-[-22%] sm:right-[-26%] md:right-[-30%] w-[138%] h-[138%] sm:w-[140%] sm:h-[140%] md:w-[142%] md:h-[142%]"
                        initial="hidden"
                        animate="visible"
                        variants={wheelVariants}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        aria-hidden
                      >
                        <motion.div
                          className="absolute inset-0"
                          animate={{ rotate: rotation }}
                          transition={{ duration: reducedMotion ? 0 : 0.8, ease: "easeInOut" }}
                        >
                          <Image
                            src={hexagonWheel}
                            alt=""
                            fill
                            className="object-contain"
                            sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                          />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Service Heading - BOTTOM (moved below wheel on mobile) */}
                    <motion.div
                      className="text-center max-w-xs z-10 order-2"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      {/* Centered inline wrapper for matched underline width */}
                      <div className="inline-block text-left">
                        <Link href={`/services/${getServiceSlug(services[activeIndex])}`}>
                          <motion.h2
                            key={`title-mobile-${activeIndex}`}
                            className="text-3xl sm:text-4xl font-bold text-white cursor-pointer hover:text-[#B0A8E0] transition-colors duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, delay: 0.15, ease: 'easeInOut' }}
                            aria-live="polite"
                            aria-label={`Current service: ${services[activeIndex]}`}
                          >
                            {services[activeIndex]}
                          </motion.h2>
                        </Link>

                        <motion.div
                          key={`underline-mobile-${activeIndex}`}
                          className="h-1 bg-white mx-0 mt-2"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.35, ease: 'easeOut' }}
                          aria-hidden
                        />

                        <motion.p
                          key={`desc-mobile-${activeIndex}`}
                          className="mt-3 text-[0.95rem] sm:text-base text-white/80 leading-relaxed"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, delay: 0.1 }}
                        >
                          {descriptions[services[activeIndex] as keyof typeof descriptions]}
                        </motion.p>
                      </div>
                    </motion.div>
              </div>

              {/* Reduced Motion - Static Service List */}
              {reducedMotion && (
                <motion.div 
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-8 text-center max-w-xs z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <p className="text-white text-sm mb-4">Our Services:</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {services.map((service, index) => (
                      <Link
                        key={service}
                        href={`/services/${getServiceSlug(service)}`}
                        className={`px-3 py-1 rounded-full transition-colors ${
                          index === 0 
                            ? 'bg-[#0C1D48] text-white' 
                            : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
