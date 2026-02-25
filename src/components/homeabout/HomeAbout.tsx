'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import about image
import aboutImage from '@/assets/home-about/aboutus.png';

const HomeAbout: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1D48] mb-6">
              About Us
            </h2>

            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Offering affordable, flexible and practical Scaffold Rental Services in NJ, Hexagon Scaffolding is well known. Our NYC affordable scaffold rental offers without sacrificing the quality or safety of the gear. Every scaffolding system is meticulously checked, maintained and delivered on time to keep your project on schedule.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Whether your site requires frame scaffolding, system scaffolding or specialty access structures. Our rental units are engineered for stability, efficiency and complete OSHA compliance. If you are searching for Scaffold Rental Near New Jersey NJ
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
              Our Professional Scaffolding Installation in New Jersey,NJ covers everything from designing the access solution to setting up and dismantling the entire structure. With certified technicians and compliance driven procedures.
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#0C1D48] mb-4">Why Choose Hexagon Scaffolding?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0C1D48] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Proven experience with major New York construction projects</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0C1D48] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">OSHA-trained teams and fully certified equipment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0C1D48] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Fast response and on time delivery</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0C1D48] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Flexible rental terms and transparent pricing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0C1D48] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Engineering driven scaffolding designs</span>
                </li>
              </ul>
            </div>

            {/* Free Consultation CTA */}
            <div className="mt-8">
              <Link
                href="/schedule"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0C1D48] text-white font-semibold px-6 py-3 sm:px-8 sm:py-3.5 shadow-lg hover:bg-blue-900 hover:-translate-y-[1px] hover:shadow-xl transition-all duration-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0C1D48] focus:ring-offset-2"
                aria-label="Free Consultation"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Free Consultation
              </Link>
            </div>
          </div>

          {/* Right Column - About Image */}
          <div className="order-first lg:order-last">
            <div className="relative rounded-lg shadow-lg aspect-[4/3] overflow-hidden">
              <Image
                src={aboutImage}
                alt="About Hexagon Scaffolding Inc."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
