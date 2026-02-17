import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AboutHero from "../components/about/AboutHero";
import Mission from "../components/about/Mission";
import Values from "../components/about/Values";
import Team from "../components/about/Team";
import CTA from "../components/about/CTA";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <main>
        <AboutHero />
        <Mission />
        <Values />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
