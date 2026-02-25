import React from 'react';

const NewsletterHero: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl shadow-lg px-6 sm:px-10 py-10 sm:py-12 mb-10 sm:mb-12">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0C1D48] mb-4">
            Stay Ahead with Hexagon Insights
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
            Get exclusive updates on our latest products, safety best practices, and industry news 
            delivered directly to your inbox. Join thousands of contractors, site managers, and 
            partners who trust Hexagon Scaffolding.
          </p>
          
          {/* Bullet Points */}
          <ul className="space-y-2 text-sm sm:text-base text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-[#0C1D48] font-bold mt-1">•</span>
              <span>Product launches and equipment updates</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0C1D48] font-bold mt-1">•</span>
              <span>Safety tips and best practices</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0C1D48] font-bold mt-1">•</span>
              <span>Exclusive promotions and training opportunities</span>
            </li>
          </ul>
        </div>

        {/* Right: Visual Icon */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#0C1D48]/10 flex items-center justify-center">
            <svg
              className="w-16 h-16 sm:w-20 sm:h-20 text-[#0C1D48]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterHero;

