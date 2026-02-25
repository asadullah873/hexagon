'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoImage from '@/assets/logo.png';
import { SERVICES, SERVICE_SLUGS } from '@/lib/services';
import { PRODUCT_NAMES, productHref } from '@/lib/products';

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  
  // Hover intent helpers
  const hoverTimers = useRef<{ open?: number; close?: number }>({});

  const openWithDelay = (name: string) => {
    if (hoverTimers.current.close) window.clearTimeout(hoverTimers.current.close);
    hoverTimers.current.open = window.setTimeout(() => setActiveDropdown(name), 80);
  };

  const closeWithDelay = () => {
    if (hoverTimers.current.open) window.clearTimeout(hoverTimers.current.open);
    hoverTimers.current.close = window.setTimeout(() => setActiveDropdown(null), 120);
  };

  const toggleMobile = () => {
    setIsMobileOpen(!isMobileOpen);
    // Prevent body scroll when mobile menu is open
    if (!isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };


  const handleMobileMenuToggle = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setIsMobileOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
      // Copy to local variable to avoid stale closure warning
      const timers = hoverTimers.current;
      if (timers.open) window.clearTimeout(timers.open);
      if (timers.close) window.clearTimeout(timers.close);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white border-b w-full">
      <meta name="google-site-verification" content="bLuQLkBGmWmTf_FUqdhnmDjRlMJkBkB5py2ePKTVwyM" />
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 md:h-20 items-center justify-between gap-4 max-w-full">
          {/* Left cluster (logo + desktop nav) */}
          <div className="flex items-center gap-4 sm:gap-6 md:gap-10 flex-1 min-w-0 max-w-full">
            {/* Logo - Always visible */}
            <Link href="/" className="shrink-0 flex items-center max-w-full">
              <Image
                src={logoImage}
                alt="Hexagon Scaffolding Logo"
                width={160}
                height={80}
                className="h-10 sm:h-12 md:h-14 w-auto max-w-full"
                priority
              />
            </Link>
            
            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden sm:flex items-center gap-5 md:gap-7 text-[#0C1D48] font-semibold" role="navigation" aria-label="Main navigation">
            <Link 
              href="/" 
              className="text-[#0C1D48] hover:text-[#0C1D48]/80 font-bold transition-colors duration-200"
            >
              Home
            </Link>
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => openWithDelay('products')}
              onMouseLeave={closeWithDelay}
            >
              <button
                onClick={() => setActiveDropdown(d => d === 'products' ? null : 'products')}
                className="text-[#0C1D48] hover:text-[#0C1D48]/80 font-bold transition-colors duration-200 flex items-center cursor-pointer"
                aria-haspopup="menu"
                aria-expanded={activeDropdown === 'products'}
                aria-label="Products menu"
              >
                Products
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'products' && (
                <div 
                  className="absolute z-50 bg-[#0C1D48] text-white min-w-[200px] shadow-lg rounded-md py-2 top-full left-0 mt-0 translate-y-1"
                  onMouseEnter={() => openWithDelay('products')}
                  onMouseLeave={closeWithDelay}
                  role="menu"
                  aria-label="Products submenu"
                >
                  {PRODUCT_NAMES.map((productName) => (
                    <Link
                      key={productName}
                      href={productHref(productName)}
                      className="block px-4 py-2 bg-[#0C1D48] text-white hover:bg-white hover:text-[#0C1D48] transition-colors duration-200 cursor-pointer text-sm md:text-base lg:text-lg"
                      role="menuitem"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {productName}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => openWithDelay('services')}
              onMouseLeave={closeWithDelay}
            >
              <button
                onClick={() => setActiveDropdown(d => d === 'services' ? null : 'services')}
                className="text-[#0C1D48] hover:text-[#0C1D48]/80 font-bold transition-colors duration-200 flex items-center cursor-pointer"
                aria-haspopup="menu"
                aria-expanded={activeDropdown === 'services'}
                aria-label="Services menu"
              >
                Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'services' && (
                <div 
                  className="absolute z-50 bg-[#0C1D48] text-white min-w-[200px] shadow-lg rounded-md py-2 top-full left-0 mt-0 translate-y-1"
                  onMouseEnter={() => openWithDelay('services')}
                  onMouseLeave={closeWithDelay}
                  role="menu"
                  aria-label="Services submenu"
                >
                  {SERVICE_SLUGS.map((slug) => {
                    const s = SERVICES[slug];
                    return (
                      <Link
                        key={slug}
                        href={`/services/${slug}`}
                        className="block px-4 py-2 bg-[#0C1D48] text-white hover:bg-white hover:text-[#0C1D48] transition-colors duration-200 cursor-pointer text-sm md:text-base lg:text-lg"
                        role="menuitem"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {s.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* About Us */}
            <Link 
              href="/about" 
              className="text-[#0C1D48] hover:text-[#0C1D48]/80 font-bold transition-colors duration-200"
            >
              About Us
            </Link>

            {/* Our Team */}
            <Link 
              href="/our-team" 
              className="text-[#0C1D48] hover:text-[#0C1D48]/80 font-bold transition-colors duration-200"
            >
              Our Team
            </Link>

            {/* Contact */}
            <Link 
              href="/contact" 
              className="text-[#0C1D48] hover:text-[#0C1D48]/80 font-bold transition-colors duration-200"
            >
              Contact
            </Link>

            {/* Newsletter */}
            <Link 
              href="/newsletter" 
              className="text-[#0C1D48] hover:text-[#0C1D48]/80 font-bold transition-colors duration-200"
            >
              Newsletter
            </Link>
          </nav>
          </div>

          {/* Right cluster (actions) - Hidden on mobile screens */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3 shrink-0 max-w-full">
            {/* Phone link */}
            <a
              href="tel:+17187258969"
              aria-label="Call (718) 725-8969 Extension 105"
              className="inline-flex items-center gap-2 rounded-full border border-[#0C1D48]/20 bg-white px-3 py-1.5 sm:px-4 sm:py-2 text-[#0C1D48] font-semibold shadow-sm hover:bg-[#0C1D48] hover:text-white transition-colors duration-200 whitespace-nowrap text-sm sm:text-base"
            >
              {/* phone icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.1 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.67-1.2a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="hidden sm:inline">(718) 725-8969</span>
              <span className="sm:hidden">Call</span>
            </a>
            
            {/* Free Consultation button */}
            <Link
              href="/schedule"
              aria-label="Free Consultation"
              className="inline-flex items-center gap-2 rounded-full border border-[#0C1D48]/20 bg-white px-3 py-1.5 sm:px-4 sm:py-2 text-[#0C1D48] font-semibold shadow-sm hover:bg-[#0C1D48] hover:text-white transition-colors duration-200 whitespace-nowrap text-sm sm:text-base"
            >
              {/* calendar icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span className="hidden sm:inline">Free Consultation</span>
              <span className="sm:hidden">Schedule</span>
            </Link>
            
            {/* Our Location button */}
            <a
              href="https://www.google.com/maps/place/Hexagon+Scaffolding/@40.7161713,-74.1994976,17z/data=!3m1!4b1!4m6!3m5!1s0x89c253234c31d457:0xc5aa743f81456662!8m2!3d40.7161713!4d-74.1994976!16s%2Fg%2F11qzc8dbng?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#0C1D48] px-3 py-1.5 sm:px-4 sm:py-2 text-white font-semibold shadow hover:bg-blue-900 transition-colors text-sm sm:text-base"
            >
              Our Location
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-nav"
            className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-[#0C1D48] hover:bg-[#0C1D48]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0C1D48] transition shrink-0"
            onClick={toggleMobile}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileOpen && (
          <div className="sm:hidden fixed inset-x-0 top-14 z-50 bg-white border-t shadow-lg w-full overflow-y-auto max-h-[calc(100vh-3.5rem)]">
            <nav id="mobile-nav" className="flex flex-col p-4 gap-2 text-[#0C1D48] w-full max-w-full">
              {/* Logo in mobile menu */}
              <div className="flex justify-center mb-4 w-full max-w-full">
                <Link href="/" className="flex items-center max-w-full" onClick={() => setIsMobileOpen(false)}>
                  <Image
                    src={logoImage}
                    alt="Hexagon Scaffolding Logo"
                    width={120}
                    height={60}
                    className="h-12 w-auto max-w-full"
                    priority
                  />
                </Link>
              </div>
              
              {/* Home */}
              <Link
                href="/"
                className="rounded-md px-3 py-3 text-base font-semibold active:bg-[#0C1D48]/5"
                onClick={() => setIsMobileOpen(false)}
              >
                Home
              </Link>
              
              {/* Products Accordion */}
              <div className="w-full max-w-full">
                <button
                  onClick={() => handleMobileMenuToggle('products')}
                  className="flex items-center justify-between rounded-md px-3 py-3 font-semibold cursor-pointer select-none w-full text-left max-w-full"
                  aria-expanded={openMenu === 'products'}
                >
                  Products
                  <svg 
                    className={`h-5 w-5 transition-transform ${openMenu === 'products' ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openMenu === 'products' && (
                  <div className="mt-1 rounded-md border bg-[#0C1D48] text-white overflow-hidden w-full max-w-full">
                    {PRODUCT_NAMES.map((productName) => (
                      <Link
                        key={productName}
                        href={productHref(productName)}
                        className="block px-4 py-2 text-sm hover:bg-white hover:text-[#0C1D48] transition-colors"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {productName}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Services Accordion */}
              <div className="w-full max-w-full">
                <button
                  onClick={() => handleMobileMenuToggle('services')}
                  className="flex items-center justify-between rounded-md px-3 py-3 font-semibold cursor-pointer select-none w-full text-left max-w-full"
                  aria-expanded={openMenu === 'services'}
                >
                  Services
                  <svg 
                    className={`h-5 w-5 transition-transform ${openMenu === 'services' ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openMenu === 'services' && (
                  <div className="mt-1 rounded-md border bg-[#0C1D48] text-white overflow-hidden w-full max-w-full">
                    {SERVICE_SLUGS.map((slug) => {
                      const s = SERVICES[slug];
                      return (
                        <Link
                          key={slug}
                          href={`/services/${slug}`}
                          className="block px-4 py-2 text-sm hover:bg-white hover:text-[#0C1D48] transition-colors"
                          onClick={() => setIsMobileOpen(false)}
                        >
                          {s.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* About Us */}
              <Link
                href="/about"
                className="rounded-md px-3 py-3 text-base font-semibold active:bg-[#0C1D48]/5"
                onClick={() => setIsMobileOpen(false)}
              >
                About Us
              </Link>

              {/* Our Team */}
              <Link
                href="/our-team"
                className="rounded-md px-3 py-3 text-base font-semibold active:bg-[#0C1D48]/5"
                onClick={() => setIsMobileOpen(false)}
              >
                Our Team
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className="rounded-md px-3 py-3 text-base font-semibold active:bg-[#0C1D48]/5"
                onClick={() => setIsMobileOpen(false)}
              >
                Contact
              </Link>

              {/* Newsletter */}
              <Link
                href="/newsletter"
                className="rounded-md px-3 py-3 text-base font-semibold active:bg-[#0C1D48]/5"
                onClick={() => setIsMobileOpen(false)}
              >
                Newsletter
              </Link>

              {/* Action buttons */}
              <div className="mt-6 space-y-3 w-full max-w-full">
                <a
                  href="tel:+17187258969"
                  className="inline-flex items-center gap-2 rounded-full border border-[#0C1D48]/20 bg-white px-3 py-2 sm:px-4 sm:py-3 text-[#0C1D48] font-semibold shadow-sm hover:bg-[#0C1D48] hover:text-white transition-colors duration-200 text-sm w-full justify-center max-w-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.1 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.67-1.2a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  (718) 725-8969
                </a>
                <Link
                  href="/schedule"
                  className="inline-flex items-center gap-2 rounded-full border border-[#0C1D48]/20 bg-white px-3 py-2 sm:px-4 sm:py-3 text-[#0C1D48] font-semibold shadow-sm hover:bg-[#0C1D48] hover:text-white transition-colors duration-200 text-sm w-full justify-center max-w-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  Free Consultation
                </Link>
                <a
                  href="https://www.google.com/maps/place/Hexagon+Scaffolding/@40.7161713,-74.1994976,17z/data=!3m1!4b1!4m6!3m5!1s0x89c253234c31d457:0xc5aa743f81456662!8m2!3d40.7161713!4d-74.1994976!16s%2Fg%2F11qzc8dbng?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#0C1D48] px-3 py-2 sm:px-4 sm:py-3 text-white font-semibold shadow hover:bg-blue-900 transition-colors text-sm w-full max-w-full"
                >
                  Our Location
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
      
    </header>
  );
};
export default Header;

