import Footer from "@/app/Components/Footer";
import HelpSection from "@/app/Components/HelpSection";
import HeroBanner from "@/app/Components/HeroBanner";
import Navbar from "@/app/Components/Navbar";
import ServicesSection from "@/app/Components/ServicesSection";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <HeroBanner />

      <div>{children}</div>
      <HelpSection />
      <ServicesSection />

      <Footer />
    </div>
  );
};

export default layout;
