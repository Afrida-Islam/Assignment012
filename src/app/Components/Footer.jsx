import React from "react";
import Link from "next/link";
import Container from "./Container";
import {
  Facebook,
  Twitter,
  Instagram,
  Ghost,
  Phone,
  Mail,
  MapPin,
  HeartHandshake,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1C1614] text-gray-300 py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center w-8 h-8 bg-[#EF6B35] rounded-lg">
                <HeartHandshake className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-bold text-white">CareZone</span>
            </div>
            <p className="text-sm leading-relaxed mb-8">
              The form of care provided for older adults varies greatly among
              countries and is changing rapidly. Even within the same country.
            </p>
            <div>
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <SocialIcon icon={<Facebook size={18} />} />
                <SocialIcon icon={<Twitter size={18} />} />
                <SocialIcon icon={<Instagram size={18} />} />
                <SocialIcon icon={<Ghost size={18} />} />
              </div>
            </div>
          </div>

          {/* Service Column */}
          <div>
            <h4 className="text-white font-bold mb-6">Service</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="#" className="hover:text-[#EF6B35]">
                  Companionship
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#EF6B35]">
                  Alzheimer's Care
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#EF6B35]">
                  Hospital Care
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#EF6B35]">
                  Skilled Nursing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#EF6B35]">
                  Resident Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="#" className="hover:text-[#EF6B35]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#EF6B35]">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#EF6B35]">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#EF6B35]">
                  Our Care Process
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#EF6B35]">
                  For Professionals
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="#" className="hover:text-[#EF6B35]">
                  F.A.Q
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#EF6B35]">
                  Career
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#EF6B35]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#EF6B35]">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#EF6B35]">
                  Payment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="text-[#EF6B35] mt-1" size={18} />
                <span>+111 201 201 2150</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-[#EF6B35] mt-1" size={18} />
                <span>Infomail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-[#EF6B35] mt-1" size={18} />
                <span>
                  777 Street Road,
                  <br />
                  New York
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-xs">
          <p>
            Copyright © 2021 <span className="text-[#EF6B35]">CareZone</span>,
            All rights Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

// Helper component for social icons
const SocialIcon = ({ icon }) => (
  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#1C1614] hover:bg-[#EF6B35] hover:text-white transition-all cursor-pointer">
    {icon}
  </div>
);

export default Footer;
