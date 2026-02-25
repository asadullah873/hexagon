import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import HomeHero from "@/components/home-hero/HomeHero";
import HomeProduct from "@/components/homeproduct/HomeProduct";
import HomeAbout from "@/components/homeabout/HomeAbout";
import HomeService from "@/components/homeservice/HomeService";

export default function Home() {
  return (
    <div>
      {/* Header component */}
      <Header />

      {/* Hero section */}
      <HomeHero />

      {/* Main content of the home page */}
      <main className="relative z-10">




        {/* HomeProduct component */}
        <HomeProduct />

        {/* HomeService component */}
        <HomeService />

        {/* HomeAbout component */}
        <HomeAbout />
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
