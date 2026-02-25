'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { productHref } from '@/lib/products';

// Import product images
import platformsImage from '@/assets/home-products/platforms.jpg';
import motorsImage from '@/assets/home-products/motors.jpg';
import outriggerImage from '@/assets/home-products/outrigger.jpg';
import accessoriesImage from '@/assets/home-products/accessories.jpg';
import stagingImage from '@/assets/home-products/staging.jpg';
import cagesImage from '@/assets/home-products/cages.jpg';

const HomeProduct: React.FC = () => {
  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-[#f5f5f5] overflow-hidden">
      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto text-center max-w-5xl lg:max-w-6xl">
        <h2 className="text-3xl font-semibold text-[#0C1D48] mb-4">Our Products</h2>
        <p className="text-lg text-[#0C1D48] mb-8">
          Explore our wide range of products tailored for your scaffolding needs.
        </p>
        
        {/* Suspended Scaffolding Subheading */}
        <h3 className="font-bold text-3xl md:text-4xl text-[#0C1D48] mb-6">
          Suspended Scaffolding
        </h3>
        
        {/* Image Grid Layout - 2x3 structure with headings below each image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
          {/* Image 1 - Platforms */}
          <Link href={productHref("Suspended Scaffolding Platforms")}>
            <div className="bg-white p-4 lg:p-5 rounded-lg shadow-md hover:scale-105 hover:shadow-xl cursor-pointer transition-all duration-300">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm mb-3 lg:mb-4">
                <Image
                  src={platformsImage}
                  alt="Suspended Scaffolding Platforms"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-center text-[#0C1D48]">Platforms</h3>
            </div>
          </Link>
          
          {/* Image 2 - Motors */}
          <Link href={productHref("Suspended Scaffolding Motors")}>
            <div className="bg-white p-4 lg:p-5 rounded-lg shadow-md hover:scale-105 hover:shadow-xl cursor-pointer transition-all duration-300">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm mb-3 lg:mb-4">
                <Image
                  src={motorsImage}
                  alt="Suspended Scaffolding Motors"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-center text-[#0C1D48]">Motors</h3>
            </div>
          </Link>
          
          {/* Image 3 - Outrigger Systems */}
          <Link href={productHref("Suspended Scaffolding Outrigger Systems")}>
            <div className="bg-white p-4 lg:p-5 rounded-lg shadow-md hover:scale-105 hover:shadow-xl cursor-pointer transition-all duration-300">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm mb-3 lg:mb-4">
                <Image
                  src={outriggerImage}
                  alt="Outrigger Systems"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-center text-[#0C1D48]">Outrigger Systems</h3>
            </div>
          </Link>
          
          {/* Image 4 - Accessories */}
          <Link href={productHref("Suspended Scaffolding Accessories")}>
            <div className="bg-white p-4 lg:p-5 rounded-lg shadow-md hover:scale-105 hover:shadow-xl cursor-pointer transition-all duration-300">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm mb-3 lg:mb-4">
                <Image
                  src={accessoriesImage}
                  alt="Scaffolding Accessories"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-center text-[#0C1D48]">Accessories</h3>
            </div>
          </Link>
          
          {/* Image 5 - Platform/Staging */}
          <div className="bg-white p-4 lg:p-5 rounded-lg shadow-md hover:scale-105 hover:shadow-xl cursor-pointer transition-all duration-300">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm mb-3 lg:mb-4">
              <Image
                src={stagingImage}
                alt="Platform/Staging"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <h3 className="text-base lg:text-lg font-semibold text-center text-[#0C1D48]">Platform/Staging</h3>
          </div>
          
          {/* Image 6 - Work Cages & Bosun Chairs */}
          <div className="bg-white p-4 lg:p-5 rounded-lg shadow-md hover:scale-105 hover:shadow-xl cursor-pointer transition-all duration-300">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm mb-3 lg:mb-4">
              <Image
                src={cagesImage}
                alt="Work Cages & Bosun Chairs"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <h3 className="text-base lg:text-lg font-semibold text-center text-[#0C1D48]">Work Cages & Bosun Chairs</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProduct;
