import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/landing/Hero";
import Features from "./components/landing/Features";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* Additional sections could be added here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
