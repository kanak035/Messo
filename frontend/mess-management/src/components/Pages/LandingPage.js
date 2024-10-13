import React from "react";
import Footer from "../mincomponents/landingpage/Footer";
import Hero from "../mincomponents/landingpage/Hero";
import Navbar from "../mincomponents/landingpage/Navbar";

function LandingPage() {
  return (
    <div className="bg-neutral-900">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default LandingPage;
