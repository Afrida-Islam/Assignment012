"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Img1 from "../assets/download.jpg";
import Img2 from "../assets/images.jpg";

const HelpSection = () => {
  const stats = [
    {
      label: "Donations",
      value: "$560K+",
      color: "bg-[#FF6B35]",
      size: "w-32 h-32 md:w-40 md:h-40",
      position: "top-0 left-0",
    },
    {
      label: "Donations",
      value: "40+",
      color: "bg-[#3D2B24]",
      size: "w-28 h-28 md:w-32 md:h-32",
      position: "bottom-0 left-4",
    },
    {
      label: "Sponsors",
      value: "60+",
      color: "bg-[#FF6B35]",
      size: "w-28 h-28 md:w-32 md:h-32",
      position: "bottom-0 right-4",
    },
    {
      label: "Volunteers",
      value: "100+",
      color: "bg-[#3D2B24]",
      size: "w-32 h-32 md:w-36 md:h-36",
      position: "top-4 right-0",
    },
    {
      label: "Sponsors",
      value: "60+",
      color: "bg-[#3D2B24]",
      size: "w-32 h-32 md:w-36 md:h-36",
      position: "bottom-8 left-1/2 -translate-x-1/2",
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#3D3D3D] leading-tight mb-6">
              We're Here to <br />
              <span className="text-[#EF6B35]">Help Your Loved</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              The form of care provided for older adults varies greatly among
              countries and is changing rapidly. Even within the same country,
              regional differences exist with respect to the care for older
              adults.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF6B35] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs shadow-lg shadow-orange-200"
            >
              Become a Partner
            </motion.button>
          </motion.div>

          {/* Right Statistics Column */}
          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[650px] flex items-center justify-center">
            {/* Soft pink background box decorative element */}
            <div className="absolute w-[90%] h-[80%] bg-[#FFF5F1] rounded-3xl -rotate-3 z-0" />

            <div className="relative w-full h-full z-10">
              {/* Statistics Circles */}
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0] }}
                  transition={{
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    },
                    scale: {
                      type: "spring",
                      stiffness: 100,
                      delay: index * 0.1,
                    },
                  }}
                  className={`absolute ${stat.position} ${stat.size} ${stat.color} rounded-full flex flex-col items-center justify-center text-white shadow-xl border-4 border-white z-30`}
                >
                  <span className="text-xl md:text-2xl font-bold">
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-xs uppercase tracking-tighter opacity-80">
                    {stat.label}
                  </span>
                </motion.div>
              ))}

              {/* LARGER CENTERED IMAGES */}

              {/* Image 1 - Top Center Focus */}
              <motion.div
                animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-3/4 -translate-y-3/4 w-44 h-44 md:w-64 md:h-64 rounded-[40px] overflow-hidden border-8 border-white shadow-2xl z-20 -rotate-6"
              >
                <Image
                  src={Img2}
                  alt="Senior Care"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Image 2 - Bottom Center Focus */}
              <motion.div
                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-0/4 w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-8 border-white shadow-2xl z-10 rotate-12"
              >
                <Image
                  src={Img1}
                  alt="Logo"
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>

              {/* Centered Accent Ping */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#FF6B35] rounded-full animate-ping opacity-20 z-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
