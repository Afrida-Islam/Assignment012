"use client";
import Link from "next/link";
import React, { useState } from "react";
import Container from "./Container";
import { HeartHandshake, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Reviews", href: "/reviews" },
    { name: "About Us", href: "/aboutUs" },
  ];

  return (
    <div className="bg-[#FFF5F1] border-b border-orange-100 sticky top-0 z-50">
      <Container>
        <div className="py-4 md:py-5 flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group z-[60]">
            <div className="flex items-center justify-center w-10 h-10 md:w-10 md:h-10 bg-[#EF6B35] rounded-xl shadow-md transition-transform group-hover:scale-110">
              <HeartHandshake
                className="text-white w-8 h-8 md:w-6 md:h-6"
                strokeWidth={2.5}
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-5xl md:text-2xl font-extrabold text-[#3D3D3D] tracking-tight">
                CareZone
              </span>
              <span className="text-[15px] md:text-[10px] text-[#EF6B35] font-bold uppercase tracking-widest mt-1">
                Care Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-8 font-semibold text-[#4A4A4A]">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="hover:text-[#EF6B35] transition-colors cursor-pointer text-[25px]"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/adminRoute"
              className="text-xs font-bold text-gray-500 hover:text-black transition-colors"
            >
              Admin
            </Link>
            <Link href="/contact">
              <button className="bg-[#FF6B35] text-white px-7 py-2.5 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#e85a20] transition-all shadow-lg active:scale-95">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-[#3D3D3D] z-[60]"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Sidebar Overlay */}
        <div
          className={`
          fixed inset-0 bg-[#FFF5F1] z-50 transform transition-transform duration-300 ease-in-out lg:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
        >
          <div className="flex flex-col h-full pt-24 px-8 space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="text-2xl font-bold text-[#3D3D3D] hover:text-[#EF6B35]"
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-orange-100" />
            <Link
              href="/adminRoute"
              onClick={toggleMenu}
              className="text-lg font-semibold text-gray-500"
            >
              Admin Portal
            </Link>
            <Link href="/contact" onClick={toggleMenu} className="w-full">
              <button className="w-full bg-[#FF6B35] text-white py-4 rounded-full font-bold uppercase tracking-wider shadow-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
