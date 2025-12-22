"use client";
import React from "react";
import { motion } from "framer-motion";
import { HeartPulse, Home, Stethoscope, HandHeart } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Health Care",
      icon: <HeartPulse className="w-7 h-7" />,
      desc: "The form of care provided for older adults varies greatly among countries and is.",
    },
    {
      title: "Resident Care",
      icon: <Home className="w-7 h-7" />,
      desc: "The form of care provided for older adults varies greatly among countries and is.",
    },
    {
      title: "Nursing Care",
      icon: <Stethoscope className="w-7 h-7" />,
      desc: "The form of care provided for older adults varies greatly among countries and is.",
    },
    {
      title: "Quality Support",
      icon: <HandHeart className="w-7 h-7" />,
      desc: "The form of care provided for older adults varies greatly among countries and is.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#3D3D3D]">
            Our Services Can Make <br />
            <span className="text-[#EF6B35]">Your Loved Happy</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -15,
                boxShadow: "0 25px 50px -12px rgba(239, 107, 53, 0.15)",
              }}
              className="relative p-10 rounded-3xl bg-white border border-transparent hover:border-orange-50 transition-all duration-300 group cursor-default shadow-sm hover:shadow-2xl"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-[#FFF5F1] rounded-full flex items-center justify-center text-[#EF6B35] mb-8 group-hover:bg-[#EF6B35] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold text-[#3D3D3D] mb-4 group-hover:text-[#EF6B35] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-base leading-relaxed">
                {service.desc}
              </p>

              {/* Subtle accent line on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#EF6B35] group-hover:w-1/2 transition-all duration-500 rounded-t-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
