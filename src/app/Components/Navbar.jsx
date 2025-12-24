"use client";

import Link from "next/link";
import React, { useState, useContext } from "react";
import Container from "./Container";
import { HeartHandshake, Menu, X } from "lucide-react";
import { UserContext } from "../Context/user.context"; // Ensure path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    setUser(null); // This clears the context, switching UI back to "Login"
    if (isOpen) toggleMenu();
  };

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
            <div className="flex items-center justify-center w-10 h-10 bg-[#EF6B35] rounded-xl shadow-md transition-transform group-hover:scale-110">
              <HeartHandshake
                className="text-white w-6 h-6"
                strokeWidth={2.5}
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-extrabold text-[#3D3D3D] tracking-tight">
                CareZone
              </span>
              <span className="text-[10px] text-[#EF6B35] font-bold uppercase tracking-widest mt-1">
                Care Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8 font-semibold text-[#4A4A4A]">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="hover:text-[#EF6B35] transition-colors text-[18px]"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            {/* <Link
              href="/adminRoute"
              className="text-xs font-bold text-gray-500 hover:text-black"
            >
              Admin
            </Link> */}

            {user?.email ? (
              <div className="flex items-center gap-4">
                <Link
                  href="/dashboard"
                  className="text-xl font-bold text-[#3D3D3D] hover:text-[#EF6B35]"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-[#FF6B35] text-white px-7 py-2.5 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#e85a20] transition-all shadow-lg active:scale-95"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link href="/services/login">
                  <button className="bg-[#FF6B35] text-white px-7 py-2.5 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#e85a20] transition-all shadow-lg">
                    Login
                  </button>
                </Link>
                <Link href="/services/signup">
                  <button className="border-2 border-[#FF6B35] text-[#FF6B35] px-7 py-2 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#FF6B35] hover:text-white transition-all">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-[#3D3D3D] z-[60]"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 bg-[#FFF5F1] z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-24 px-8 space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="text-2xl font-bold text-[#3D3D3D]"
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-orange-100" />
            {user?.email ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={toggleMenu}
                  className="text-2xl font-bold text-[#3D3D3D]"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full bg-[#FF6B35] text-white py-4 rounded-full font-bold uppercase shadow-lg"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-4">
                {/* MOBILE LOGIN LINK */}
                <Link href="/services/login" onClick={toggleMenu}>
                  <button className="w-full bg-[#FF6B35] text-white py-4 rounded-full font-bold uppercase shadow-lg">
                    Login
                  </button>
                </Link>
                <Link href="/services/signup" onClick={toggleMenu}>
                  <button className="w-full border-2 border-[#FF6B35] text-[#FF6B35] py-4 rounded-full font-bold uppercase shadow-md">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
