"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import BannerImg from "../assets/bannerImg.jpg";
const HeroBanner = () => {
  // Animation Variants for staggered entrance
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-[#FFF5F1]">
      {/* Max-width container matching your 'Container' component style */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          {/* LEFT CONTENT: Text and CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#3D3D3D] leading-[1.1]"
            >
              Find The Prefect <br />
              Caregiver For You
              <span className="text-[#EF6B35]"> Loved One</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-8 text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              The form of care provided for older adults varies greatly among
              countries and is changing rapidly. Even within the same country,
              regional differences exist with respect to the care for older
              adults.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FF6B35] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl flex items-center justify-center gap-2 group"
              >
                Learn More
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT: Animated Image with Blob Shape */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            {/* Soft background glow decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-200/40 blur-[100px] rounded-full" />

            {/* Floating Container */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[520px] lg:h-[520px] z-10"
            >
              {/* Image with Organic CSS Border Radius */}
              <div
                className="w-full h-full overflow-hidden shadow-2xl border-[12px] border-white bg-gradient-to-br from-[#EF6B35] to-orange-300"
                style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
              >
                <Image
                  src={BannerImg}
                  alt="Logo"
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Accent Decorative Elements */}
              <div className="absolute -bottom-6 -left-8 w-16 h-16 sm:w-20 sm:h-20 bg-[#EF6B35] rounded-full border-8 border-white shadow-lg" />
              <div className="absolute top-10 -right-4 w-10 h-10 bg-orange-300 rounded-full opacity-60" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
