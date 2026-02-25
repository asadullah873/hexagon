'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import service images
import rentalImage from '@/assets/home-service/rental.png';
import salesImage from '@/assets/home-service/sales.png';
import servicesImage from '@/assets/home-service/services.png';
import installationImage from '@/assets/home-service/installation.png';
import engineeringImage from '@/assets/home-service/engineering.png';
import licenseImage from '@/assets/home-service/license.png';

const HomeService: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto text-center max-w-5xl lg:max-w-6xl">
        <h2 className="text-3xl font-semibold text-[#0C1D48] mb-4">Our Services</h2>
        <p className="text-lg text-gray-700 mb-8">
          Comprehensive scaffolding solutions tailored to meet your project requirements.
        </p>

        {/* Services Grid Layout - 3 items per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">

          {/* Service 1 - Rental */}
          <Link href="/services/rental" aria-label="Go to Rental service" className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1D48] rounded-lg">
            <div className="bg-white p-4 lg:p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform-gpu hover:-translate-y-1 cursor-pointer">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm mb-3 lg:mb-4">
                <Image
                  src={rentalImage}
                  alt="Rental Services"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-[#0C1D48]">Rental</h3>
            </div>
          </Link>

          {/* Service 2 - Sales */}
          <Link href="/services/sales" aria-label="Go to Sales service" className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1D48] rounded-lg">
            <div className="bg-white p-4 lg:p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform-gpu hover:-translate-y-1 cursor-pointer">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm mb-3 lg:mb-4">
                <Image
                  src={salesImage}
                  alt="Sales Services"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-[#0C1D48]">Sales</h3>
            </div>
          </Link>

          {/* Service 3 - Repair Service */}
          <Link href="/services/repair" aria-label="Go to Repair service" className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1D48] rounded-lg">
            <div className="bg-white p-4 lg:p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform-gpu hover:-translate-y-1 cursor-pointer">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm mb-3 lg:mb-4">
                <Image
                  src={servicesImage}
                  alt="Repair Services"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-[#0C1D48]">Repair</h3>
            </div>
          </Link>

          {/* Service 4 - Installation */}
          <Link href="/services/installation" aria-label="Go to Installation service" className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1D48] rounded-lg">
            <div className="bg-white p-4 lg:p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform-gpu hover:-translate-y-1 cursor-pointer">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm mb-3 lg:mb-4">
                <Image
                  src={installationImage}
                  alt="Installation Services"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-[#0C1D48]">Installation</h3>
            </div>
          </Link>

          {/* Service 5 - Engineering */}
          <Link href="/services/engineering" aria-label="Go to Engineering service" className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1D48] rounded-lg">
            <div className="bg-white p-4 lg:p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform-gpu hover:-translate-y-1 cursor-pointer">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm mb-3 lg:mb-4">
                <Image
                  src={engineeringImage}
                  alt="Engineering Services"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-[#0C1D48]">Engineering</h3>
            </div>
          </Link>

          {/* Service 6 - Licensing */}
          <Link href="/services/licensing" aria-label="Go to Licensing service" className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1D48] rounded-lg">
            <div className="bg-white p-4 lg:p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform-gpu hover:-translate-y-1 cursor-pointer">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm mb-3 lg:mb-4">
                <Image
                  src={licenseImage}
                  alt="Licensing Services"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-[#0C1D48]">Licensing</h3>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default HomeService;
