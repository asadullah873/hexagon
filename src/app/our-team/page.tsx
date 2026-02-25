import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import teamBanner from "@/assets/our-team/Team-Banner.jpg";

export default function OurTeam() {
  const teamMembers = [
    { name: "Jose Cruz", title: "President & CEO" },
    { name: "Haroon Najam", title: "COO" },
    { name: "Eduardo Robles", title: "CFO" },
    { name: "Vinnicio Castillo", title: "VP OPERATIONS & LOGISTICS" },
    { name: "Anita P. Kim", title: "VP FINANCE" },
  ];

  // Helper function to render card content
  const renderCardContent = (member: { name: string; title: string }, initials: string, isFeatured: boolean = false) => {
    return (
      <>
        {/* Subtle hexagon accent in corner */}
        <div className="absolute top-2 right-2 w-8 h-8 opacity-5 group-hover:opacity-10 transition-opacity duration-200">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,5 90,25 90,75 50,95 10,75 10,25"
              fill="#0C1D48"
            />
          </svg>
        </div>

        {/* Avatar with gradient border */}
        <div className={`flex justify-center mb-5 ${isFeatured ? 'mt-2' : 'mt-2'}`}>
          <div className="relative">
            {/* Gradient border circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0C1D48] to-[#0C1D48]/60 p-0.5">
              <div className="w-full h-full rounded-full bg-white"></div>
            </div>
            {/* Avatar container */}
            <div className={`relative ${isFeatured ? 'w-24 h-24 sm:w-28 sm:h-28' : 'w-20 h-20 sm:w-24 sm:h-24'} rounded-full bg-gradient-to-br from-[#0C1D48] to-[#0C1D48]/80 flex items-center justify-center shadow-md`}>
              {/* Initials or Icon */}
              <span className={`${isFeatured ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'} font-bold text-white`}>
                {initials}
              </span>
            </div>
          </div>
        </div>

        {/* Name */}
        <h3 className={`${isFeatured ? 'text-xl sm:text-2xl' : 'text-lg'} font-semibold text-[#0C1D48] mt-4 mb-2`}>
          {member.name}
        </h3>
        
        {/* Divider */}
        <div className="w-12 h-0.5 bg-[#0C1D48]/20 mx-auto mb-3"></div>
        
        {/* Title */}
        <p className="text-xs uppercase tracking-wide text-slate-500 mt-1">
          {member.title}
        </p>
        
        {/* Subtle descriptor */}
        <p className="text-xs text-slate-400 mt-3 pt-3 border-t border-slate-100">
          Hexagon Leadership
        </p>
      </>
    );
  };

  return (
    <>
      <Header />
      {/* Full-bleed Banner */}
      <div className="w-full relative aspect-[16/6] sm:aspect-[16/5] lg:aspect-[16/4] overflow-hidden">
        <Image
          src={teamBanner}
          alt="Hexagon Scaffolding team banner"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      <div className="bg-slate-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          {/* Main rounded section */}
          <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            {/* Subtle hexagon pattern background */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon
                  points="50,5 90,25 90,75 50,95 10,75 10,25"
                  fill="#0C1D48"
                />
              </svg>
            </div>

            {/* Header Section */}
            <div className="relative z-10 text-center mb-10 sm:mb-12">
              {/* Accent Badge */}
              <p className="text-xs uppercase tracking-[0.2em] text-[#0C1D48]/70 mb-4 font-semibold">
                MEET THE PEOPLE BEHIND HEXAGON
              </p>
              
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl font-bold text-[#0C1D48] mb-4">
                OUR TEAM
              </h1>

              {/* Description paragraph */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mt-4">
                At Hexagon Scaffolding Inc., our dedicated team is committed to providing the highest standards of scaffolding and training services. Each member of our team brings a wealth of experience and expertise, ensuring that we meet and exceed industry standards. We take pride in our collaborative approach to every project, delivering exceptional results for our clients.
              </p>
            </div>

            {/* Team cards - Creative magazine-style layout */}
            <div className="relative z-10">
              {/* Mobile: Simple stack */}
              <div className="grid grid-cols-1 gap-6 lg:hidden">
                {teamMembers.map((member, index) => {
                  const initials = member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase();

                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-md border border-slate-100 p-6 sm:p-7 text-center group hover:-translate-y-1 hover:shadow-xl hover:border-[#0C1D48]/20 transition-all duration-200 relative overflow-hidden"
                    >
                      {renderCardContent(member, initials, index === 0)}
                    </div>
                  );
                })}
              </div>

              {/* Desktop: Creative asymmetric layout */}
              <div className="hidden lg:block">
                <div className="flex flex-col gap-8">
                  {/* Top Row: CEO centered, COO and CFO on sides */}
                  <div className="flex items-start gap-6 justify-center">
                    {/* COO - Left */}
                    <div className="flex-1 max-w-[320px] bg-white rounded-2xl shadow-md lg:shadow-lg border border-slate-100 p-6 sm:p-7 text-center group hover:-translate-y-1 hover:shadow-xl hover:border-[#0C1D48]/20 transition-all duration-200 relative overflow-hidden">
                      {renderCardContent(teamMembers[1], teamMembers[1].name.split(" ").map((n) => n[0]).join("").toUpperCase())}
                    </div>
                    
                    {/* CEO - Featured Center (larger) */}
                    <div className="flex-[1.3] max-w-[400px] bg-white rounded-2xl shadow-xl border-2 border-[#0C1D48]/10 p-8 lg:p-10 text-center group hover:-translate-y-2 hover:shadow-2xl hover:border-[#0C1D48]/30 transition-all duration-200 relative overflow-hidden">
                      {renderCardContent(teamMembers[0], teamMembers[0].name.split(" ").map((n) => n[0]).join("").toUpperCase(), true)}
                    </div>
                    
                    {/* CFO - Right */}
                    <div className="flex-1 max-w-[320px] bg-white rounded-2xl shadow-md lg:shadow-lg border border-slate-100 p-6 sm:p-7 text-center group hover:-translate-y-1 hover:shadow-xl hover:border-[#0C1D48]/20 transition-all duration-200 relative overflow-hidden">
                      {renderCardContent(teamMembers[2], teamMembers[2].name.split(" ").map((n) => n[0]).join("").toUpperCase())}
                    </div>
                  </div>

                  {/* Bottom Row: VPs staggered */}
                  <div className="flex items-end gap-6 justify-center">
                    {/* VP Operations - Left, slightly higher */}
                    <div className="flex-1 max-w-[320px] bg-white rounded-2xl shadow-md lg:shadow-lg border border-slate-100 p-6 sm:p-7 text-center group hover:-translate-y-1 hover:shadow-xl hover:border-[#0C1D48]/20 transition-all duration-200 relative overflow-hidden -mt-8">
                      {renderCardContent(teamMembers[3], teamMembers[3].name.split(" ").map((n) => n[0]).join("").toUpperCase())}
                    </div>
                    
                    {/* VP Finance - Right, normal position */}
                    <div className="flex-1 max-w-[320px] bg-white rounded-2xl shadow-md lg:shadow-lg border border-slate-100 p-6 sm:p-7 text-center group hover:-translate-y-1 hover:shadow-xl hover:border-[#0C1D48]/20 transition-all duration-200 relative overflow-hidden">
                      {renderCardContent(teamMembers[4], teamMembers[4].name.split(" ").map((n) => n[0]).join("").toUpperCase())}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tablet: 2-column with CEO featured */}
              <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
                {teamMembers.map((member, index) => {
                  const initials = member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase();

                  return (
                    <div
                      key={index}
                      className={`bg-white rounded-2xl shadow-md border border-slate-100 p-6 sm:p-7 text-center group hover:-translate-y-1 hover:shadow-xl hover:border-[#0C1D48]/20 transition-all duration-200 relative overflow-hidden ${index === 0 ? 'col-span-2' : ''}`}
                    >
                      {renderCardContent(member, initials, index === 0)}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

