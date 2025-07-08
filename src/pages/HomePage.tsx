import React from "react";
import Service from "./Service";
import Hero from "../components/sections/Hero";
import LogoCarousel from "../components/common/LogoCarousel";
import CTASection from "../components/sections/CTASection";
import VendingSection from "../components/sections/Vending";

function HomePage() {
  return (
    <div>
      <Hero />
      <LogoCarousel />
      <VendingSection />
      <div id="services">
        <Service />
      </div>
      <CTASection />
    </div>
  );
}

export default HomePage;
