import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Page view tracking (placeholder for analytics)
    console.log("Page view tracked:", {
      page: "/",
      timestamp: new Date().toISOString(),
      referrer: document.referrer,
    });

    // You can add Google Analytics, Facebook Pixel, or other tracking here
    // Example: gtag('event', 'page_view', { page_path: '/' });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
