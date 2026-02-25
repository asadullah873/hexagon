import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import NewsletterHero from "@/components/newsletter/NewsletterHero";
import NewsletterBenefits from "@/components/newsletter/NewsletterBenefits";
import NewsletterForm from "@/components/newsletter/NewsletterForm";
import NewsletterFAQ from "@/components/newsletter/NewsletterFAQ";

export default function Newsletter() {
  return (
    <>
      <Header />
      <div className="bg-slate-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <NewsletterHero />
          <NewsletterBenefits />
          <NewsletterForm />
          <NewsletterFAQ />
        </div>
      </div>
      <Footer />
    </>
  );
}

