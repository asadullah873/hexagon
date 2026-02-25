import React from 'react';

const NewsletterBenefits: React.FC = () => {
  const benefits = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-[#0C1D48]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Project Tips & Safety Insights',
      description: 'Learn from industry experts with practical safety guidelines and project management tips to keep your team safe and efficient.',
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-[#0C1D48]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      title: 'New Products & Service Updates',
      description: 'Be the first to know about new equipment, service enhancements, and innovative solutions for your scaffolding needs.',
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-[#0C1D48]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      ),
      title: 'Exclusive Promotions & Training',
      description: 'Access special offers, early-bird pricing, and information about upcoming training sessions and certification programs.',
    },
  ];

  return (
    <section className="mb-10 sm:mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#0C1D48] mb-4 text-center">
        Why Subscribe?
      </h2>
      <p className="text-base sm:text-lg text-slate-700 text-center mb-8 max-w-2xl mx-auto">
        Join our community and stay informed about everything that matters to your business.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md px-6 py-6 h-full flex flex-col items-center text-center"
          >
            <div className="mb-4 w-16 h-16 rounded-full bg-[#0C1D48]/10 flex items-center justify-center">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold text-[#0C1D48] mb-3">
              {benefit.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsletterBenefits;

