import React from 'react';

const NewsletterFAQ: React.FC = () => {
  const faqs = [
    {
      question: 'How often will I receive emails?',
      answer: 'We typically send 1-2 emails per month with important updates, product news, safety tips, and exclusive offers. We respect your inbox and only send content that adds value.',
    },
    {
      question: 'Can I unsubscribe at any time?',
      answer: 'Absolutely. Every email includes an unsubscribe link at the bottom. You can opt out at any time with just one click, and we\'ll remove you from our list immediately.',
    },
    {
      question: 'Is my email shared with third parties?',
      answer: 'No. We take your privacy seriously. Your email address is only used by Hexagon Scaffolding to send you newsletter updates. We never sell, rent, or share your information with third parties.',
    },
    {
      question: 'What type of content will I receive?',
      answer: 'You\'ll receive updates about new products, safety best practices, industry news, exclusive promotions, training opportunities, and helpful tips for contractors and site managers.',
    },
  ];

  return (
    <section className="mt-10 sm:mt-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#0C1D48] mb-4 text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-base sm:text-lg text-slate-700 text-center mb-8 max-w-2xl mx-auto">
        Have questions? We&apos;ve got answers.
      </p>

      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md px-6 sm:px-8 py-6 border border-slate-100"
          >
            <h3 className="text-lg sm:text-xl font-bold text-[#0C1D48] mb-3">
              {faq.question}
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsletterFAQ;

