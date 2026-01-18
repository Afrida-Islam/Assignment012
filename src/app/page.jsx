import Image from "next/image";
import Navbar from "./Components/Navbar";
import HeroBanner from "./Components/HeroBanner";
import HelpSection from "./Components/HelpSection";
import ServicesSection from "./Components/ServicesSection";
import Features from "./Components/Features";
import About from "./Components/About";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <h1>
      <Navbar />
      <HeroBanner />
      <Features />
      <About />
      <Testimonials />
      {/* <div>{children}</div> */}
      <HelpSection />
      <ServicesSection />
      <Footer />
    </h1>
  );
}
