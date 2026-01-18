"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! (Mock)");
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#3D3D3D]">Get In Touch</h2>
          <p className="text-gray-500 mt-4">Have questions? We are here to help you 24/7.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#3D3D3D] mb-4">Contact Information</h3>
            <div className="bg-[#FFF5F1] p-10 rounded-[2.5rem] space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#EF6B35] shadow-sm">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-[#3D3D3D] text-lg">Email Us</h4>
                  <p className="text-gray-600 font-medium">afrida0627@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#EF6B35] shadow-sm">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-[#3D3D3D] text-lg">Call Us</h4>
                  <p className="text-gray-600 font-medium">01738128752</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#EF6B35] shadow-sm">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-[#3D3D3D] text-lg">Location</h4>
                  <p className="text-gray-600 font-medium">Level-4, 34, Awal Centre, Banani, Dhaka</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white border border-orange-100 p-10 rounded-[2.5rem] shadow-xl shadow-orange-100/50 space-y-6">
            <h3 className="text-2xl font-bold text-[#3D3D3D] mb-2">Send a Message</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#3D3D3D] ml-1">Full Name</label>
                <input required type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 outline-none focus:border-[#EF6B35] transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#3D3D3D] ml-1">Email Address</label>
                <input required type="email" placeholder="email@example.com" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 outline-none focus:border-[#EF6B35] transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#3D3D3D] ml-1">Message</label>
              <textarea required rows="4" placeholder="How can we help you?" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 outline-none focus:border-[#EF6B35] transition-all resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#EF6B35] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#e85a20] transition-all shadow-lg shadow-orange-200">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}