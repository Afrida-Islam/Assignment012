import Image from "next/image";
import Navbar from "./Components/Navbar";
import HeroBanner from "./Components/HeroBanner";
import HelpSection from "./Components/HelpSection";
import ServicesSection from "./Components/ServicesSection";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <h1>
      <Navbar />
      <HeroBanner />
      {/* <div>{children}</div> */}
      <HelpSection />
      <ServicesSection />
      <Footer />
    </h1>
  );
}
