import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import Pricing from "../components/landing/Pricing";
import Footer from "../components/layout/Footer";
import Reveal from "../components/ui/Reveal";

const LandingPage = () => {
  return (
    <div className="bg-slate-900 min-h-screen font-sans">
      <Navbar />
      <main>
        <Reveal width="100%">
          <Hero />
        </Reveal>
        <Reveal width="100%">
          <Features />
        </Reveal>
        <Reveal width="100%">
          <Pricing />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
