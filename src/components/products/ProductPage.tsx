"use client";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { productHref } from "@/lib/products";

export default function ProductPage({ product }: { product: Product }) {
  return (
    <section className="w-full">
      {/* Banner section - full width, no text overlay */}
      <div className="relative h-[36vh] sm:h-[44vh] lg:h-[52vh] overflow-hidden shadow-none before:hidden after:hidden border-b-0 ring-0">
        <Image
          src={product.banner}
          alt={`${product.name} banner`}
          fill
          priority
          sizes="100vw"
          className="object-cover filter-none"
        />
      </div>

      {/* Text content */}
      <div id="product-content" className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12 max-w-5xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0C1D48]">
          {product.name}
        </h1>
        
        {/* Underline bar */}
        {/* <div className="mt-2 h-1 w-135 bg-[#0C1D48]" /> */}
        
        {/* Tagline */}
        <p className="mt-4 text-lg text-gray-700">
          {product.tagline}
        </p>
        
        {/* Body paragraphs */}
        <div className="space-y-5 sm:space-y-6 lg:space-y-7">
          {product.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Clickable Grid - below content */}
      <div id="product-grid" className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 lg:mt-16 py-8 sm:py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {product.gallery.map((item, index) => {
            const isPdf = typeof item.href === "string" && item.href.toLowerCase().endsWith(".pdf");
            const linkHref = item.href ?? productHref(product.slug);
            
            return (
              <div key={index} className="group">
                {isPdf ? (
                  <a
                    href={linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-black/5 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-0.5">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        loading="lazy"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </div>
                  </a>
                ) : (
                  <Link
                    href={linkHref}
                    className="block cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-black/5 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-0.5">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        loading="lazy"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </div>
                  </Link>
                )}
                {item.title && (
                  <div className="mt-2 sm:mt-2.5 text-center">
                    {isPdf ? (
                      <a
                        href={linkHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.title} – ${product.name}`}
                        className="cursor-pointer"
                      >
                        <h3 className="text-sm sm:text-base font-semibold text-[#0C1D48] group-hover:text-[#0C1D48]/80 transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                      </a>
                    ) : (
                      <Link
                        href={linkHref}
                        aria-label={`${item.title} – ${product.name}`}
                        className="cursor-pointer"
                      >
                        <h3 className="text-sm sm:text-base font-semibold text-[#0C1D48] group-hover:text-[#0C1D48]/80 transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                      </Link>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
