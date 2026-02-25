import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import contactBanner from "@/assets/contact/Contact-Us-Banner.jpg";

export default function Contact() {
  return (
    <>
      <Header />
      {/* Full-bleed Banner */}
      <div className="w-full relative aspect-[16/6] sm:aspect-[16/5] lg:aspect-[16/4] overflow-hidden">
        <Image
          src={contactBanner}
          alt="Contact Hexagon Scaffolding banner"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0C1D48] mb-6 text-center">
          Contact Us
        </h1>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-10">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-[#0C1D48]/20 text-[#0C1D48] hover:bg-[#0C1D48] hover:text-white hover:border-[#0C1D48] transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
            aria-label="Visit our Facebook page"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-[#0C1D48]/20 text-[#0C1D48] hover:bg-[#0C1D48] hover:text-white hover:border-[#0C1D48] transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
            aria-label="Visit our Instagram page"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-[#0C1D48]/20 text-[#0C1D48] hover:bg-[#0C1D48] hover:text-white hover:border-[#0C1D48] transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
            aria-label="Visit our LinkedIn page"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.023-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

        {/* Business Hours section */}
        <div className="bg-[#F4F8FC] rounded-3xl shadow-lg p-8 sm:p-12 lg:p-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0C1D48] mb-8 text-center">
            Business Hours
          </h2>

          {/* Two-column layout for Office and Shop Hours */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
            {/* Office Hours Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0C1D48] mb-4 uppercase tracking-wide">
                OFFICE HOURS
              </h3>
              <p className="text-sm sm:text-base text-slate-500 mb-4">
                Summer Schedule (April - September)
              </p>
              <div className="space-y-2 text-base sm:text-lg text-slate-700">
                <p>Monday - Friday: 7:00 AM - 3:30 PM</p>
                <p>Saturday: 7:00 AM - 11:30 AM</p>
                <p>Sunday: CLOSED</p>
              </div>
            </div>

            {/* Shop Hours Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0C1D48] mb-4 uppercase tracking-wide">
                SHOP HOURS
              </h3>
              <p className="text-sm sm:text-base text-slate-500 mb-4">
                Winter Schedule (Starts Monday after Thanksgiving)
              </p>
              <div className="space-y-2 text-base sm:text-lg text-slate-700">
                <p>Monday - Friday: 7:00 AM - 3:30 PM</p>
                <p>Saturday - Sunday: CLOSED</p>
              </div>
            </div>
          </div>

          {/* Additional information */}
          <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            <p>
              Our office is open from Monday through Friday, 7:00 AM to 3:30 PM, and most Saturdays during the summer. We provide delivery, pick-up, and rental returns during these hours. Extended hours may be available to accommodate your needs, though additional service charges may apply.
            </p>
            <p>
              For urgent requirements, we offer <span className="font-semibold">24-hour emergency service</span>. Just leave us a voicemail, and our team will get back to you promptly.
            </p>
          </div>
        </div>

        {/* Location Map Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0C1D48] mb-8 text-center">
            Location
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative w-full aspect-[16/9]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.234567890123!2d-74.1994976!3d40.7161713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c253234c31d457%3A0xc5aa743f81456662!2sHexagon%20Scaffolding!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="Hexagon Scaffolding Location"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

