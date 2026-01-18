"use client";

import Link from "next/link";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Container from "./Container";
import { HeartHandshake, Menu, X } from "lucide-react";
import { UserContext } from "../Context/user.context";
import Cookies from "js-cookie"; // কুকি রিমুভ করার জন্য এটি প্রয়োজন

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("logged_in_user");
    
    // ১. কুকি থেকে সেশন রিমুভ করুন
    Cookies.remove("user_session");

    // ২. হোম পেজে রিডাইরেক্ট করুন
    router.push("/");

    // মোবাইল মেনু বন্ধ করুন
    setIsOpen(false);
  };

  // ৩. এখানে "Items/Lists" লিঙ্কটি যুক্ত করা হয়েছে
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Items/Lists", href: "/items/lists" }, // অ্যাসাইনমেন্টের রিকোয়ারমেন্ট
    { name: "Services", href: "/services" },
  ];

  return (
    <div className="bg-[#FFF5F1] border-b border-orange-100 sticky top-0 z-50">
      <Container>
        <div className="py-4 md:py-5 flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group z-[60]">
            <div className="flex items-center justify-center w-10 h-10 bg-[#EF6B35] rounded-xl shadow-md transition-transform group-hover:scale-110">
              <HeartHandshake className="text-white w-8 h-8" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-3xl font-extrabold text-[#3D3D3D] tracking-tight">CareZone</span>
              <span className="text-[15px] text-[#EF6B35] font-bold uppercase tracking-widest mt-1">Care Platform</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8 font-semibold text-[#4A4A4A]">
            {navLinks.map((link) => (
              <li key={link.name} className="hover:text-[#EF6B35] transition-colors text-[20px]">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
            {user?.email && (
              <li className="hover:text-[#EF6B35] transition-colors text-[20px] text-[#EF6B35]">
                <Link href="/mybooking">My Booking</Link>
              </li>
            )}
          </ul>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            {user?.email ? (
              <div className="flex items-center gap-4">
                <span className="text-[18px] font-bold text-gray-600">Hi, {user.name || "User"}</span>
                <button
                  onClick={handleLogout}
                  className="bg-[#FF6B35] text-white px-7 py-2.5 rounded-full font-bold uppercase text-sm hover:bg-[#e85a20] transition-all"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                {/* অ্যাসাইনমেন্ট অনুযায়ী লগইন লিঙ্ক */}
                <Link href="/login"> 
                  <button className="bg-[#FF6B35] text-white px-7 py-2.5 rounded-full font-bold uppercase text-sm shadow-lg">
                    Login
                  </button>
                </Link>
                <Link href="/signup">
                  <button className="border-2 border-[#FF6B35] text-[#FF6B35] px-7 py-2 rounded-full font-bold uppercase text-sm hover:bg-[#FF6B35] hover:text-white transition-all">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>

          <button onClick={toggleMenu} className="lg:hidden p-2 text-[#3D3D3D] z-[60]">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div className={`fixed inset-0 bg-[#FFF5F1] z-50 transform transition-transform duration-300 lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex flex-col h-full pt-24 px-8 space-y-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={toggleMenu} className="text-2xl font-bold text-[#3D3D3D]">
                {link.name}
              </Link>
            ))}
            {user?.email && (
              <Link href="/mybooking" onClick={toggleMenu} className="text-2xl font-bold text-[#EF6B35]">
                My Booking
              </Link>
            )}
            <hr className="border-orange-100" />
            {user?.email ? (
              <div className="space-y-4">
                <p className="font-bold text-gray-500">Logged in: {user.email}</p>
                <button onClick={handleLogout} className="w-full bg-[#FF6B35] text-white py-4 rounded-full font-bold uppercase">
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <Link href="/login" onClick={toggleMenu}>
                  <button className="w-full bg-[#FF6B35] text-white py-5 rounded-full font-bold uppercase">Login</button>
                </Link>
                <Link href="/signup" onClick={toggleMenu}>
                  <button className="w-full border-2 border-[#FF6B35] text-[#FF6B35] py-5 rounded-full font-bold uppercase">Register</button>
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