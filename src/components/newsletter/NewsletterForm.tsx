'use client';

import React, { useState, FormEvent } from 'react';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);
    setEmail('');
    setName('');

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 mb-10 sm:mb-12">
      <div className="bg-white rounded-2xl shadow-lg px-6 sm:px-8 py-8 sm:py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0C1D48] mb-3 text-center">
          Join the Newsletter
        </h2>
        <p className="text-sm sm:text-base text-slate-600 text-center mb-6">
          No spam. Only relevant updates for contractors, site managers, and partners.
        </p>

        {isSubmitted ? (
          <div className="text-center py-4">
            <div className="inline-flex items-center gap-2 text-green-600 mb-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="font-semibold">Thank you for subscribing!</span>
            </div>
            <p className="text-sm text-slate-600">
              We&apos;ll send you updates soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Name (Optional)
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0C1D48] focus:border-transparent text-slate-900"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0C1D48] focus:border-transparent text-slate-900"
                placeholder="your.email@example.com"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto sm:px-8 bg-[#0C1D48] text-white font-semibold rounded-full px-6 py-3 shadow hover:bg-blue-900 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;

