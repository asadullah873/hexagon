import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import logoImage from "@/assets/logo-footer.jpg";
import aboutBanner from "@/assets/about/About-Us-Banner.jpg";

export default function About() {
  return (
    <>
      <Header />
      {/* Full-bleed Banner */}
      <div className="w-full relative aspect-[16/6] sm:aspect-[16/5] lg:aspect-[16/4] overflow-hidden">
        <Image
          src={aboutBanner}
          alt="About Hexagon Scaffolding banner"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Main Content Section */}
      <div className="bg-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Main Heading */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <p className="text-xs uppercase tracking-wide text-[#0C1D48]/70 mb-2">
              About Hexagon Scaffolding
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0C1D48]">
              About Hexagon Scaffolding
            </h1>
          </div>

          {/* Creative Staggered Layout */}
          <div className="space-y-8 lg:space-y-12">
            {/* First Row: Brand Card on Left, First Paragraph on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
              {/* Brand Card - Takes 1 column, positioned left */}
              <div className="lg:col-span-1">
                <div className="bg-[#0C1D48] rounded-2xl p-6 sm:p-8 shadow-xl sticky top-8">
                  <div className="flex justify-center mb-6">
                    <Image
                      src={logoImage}
                      alt="Hexagon Scaffolding Logo"
                      width={250}
                      height={125}
                      className="w-auto h-auto max-w-full"
                      priority
                    />
                  </div>
                  <p className="text-sm sm:text-base text-slate-200 text-center leading-relaxed">
                    Recognized leader in suspended scaffolding solutions in the Tri-state area.
                  </p>
                </div>
              </div>

              {/* Text Content - Takes 2 columns */}
              <div className="lg:col-span-2 space-y-5 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0C1D48]">
                  Excellence in Scaffolding Solutions
                </h2>
                
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Hexagon Scaffolding, Inc. is a recognized leader in providing suspended scaffolding solutions in Tri-state area.
                </p>
                
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Over the last 5 years, we have built a reputation for delivering high-quality scaffolding products and unparalleled service throughout the New York metropolitan area and neighboring states.
                </p>
              </div>
            </div>

            {/* Second Row: Full-width content card */}
            <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 lg:p-10">
              <div className="space-y-4 sm:space-y-5 max-w-4xl mx-auto">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  We specialize in <strong className="font-semibold text-[#0C1D48]">Rental, Sales, Service & Maintenance, Installation, Engineering, and Training</strong>. Our goal is to offer comprehensive solutions to meet every scaffolding requirement you may have.
                </p>
                
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  We provide 24-hour emergency services and can service not only our own equipment but also that of most competitors. This commitment to service is why our customers choose Hexagon Scaffolding time and time again.
                </p>
              </div>
            </div>

            {/* Third Row: Two-column text layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  We are committed to delivering unmatched customer service and supporting our clients when other scaffolding companies cannot. We believe in treating every customer like family, ensuring a supportive and efficient experience every time.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                  If you have any questions or would like to discuss renting or purchasing scaffolding, feel free to reach out. Our dedicated team is here to help with all your scaffolding needs.
                </p>
                
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Visit us at our facility located at <strong className="font-semibold text-[#0C1D48]">369 Jelliff Ave, Newark, NJ 07108</strong>, to see our fully maintained rental fleet ready to go at a moment&apos;s notice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

