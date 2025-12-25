"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Star,
  CheckCircle2,
  User,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import localServices from "../../../data/services.json";
import { useContext, useState, useEffect, use } from "react"; // 'use' ইম্পোর্ট করুন
import { useRouter } from "next/navigation";
import { UserContext } from "../../../Context/user.context";

export default function ServiceDetailsPage({ params }) {
  // params কে আনর্যাপ (unwrap) করার জন্য React.use() ব্যবহার করুন
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;

  const [service, setService] = useState(null);
  const { user } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    const serviceData = localServices.find((s) => s.id === parseInt(id));
    if (serviceData) {
      setService(serviceData);
    }
  }, [id]);

  const handleBooking = () => {
    if (user) {
      router.push(`/services/booking/${service.id}`);
    } else {
      alert("Please login to book this service.");
      router.push("/services/login"); // লগইন না থাকলে লগইন পেজে পাঠিয়ে দেওয়া ভালো
    }
  };

  // সার্ভিস লোড হওয়ার আগ পর্যন্ত সেফটি চেক
  if (!service) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-bold animate-pulse text-[#EF6B35]">
          Loading Service...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* বাকি সব কোড আগের মতোই থাকবে */}
      <div className="max-w-5xl mx-auto px-4">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#EF6B35] mb-8 transition-colors group"
        >
          <ArrowLeft
            size={20}
            className="transition-transform group-hover:-translate-x-1"
          />
          <span className="font-semibold">Back to Services</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="relative h-[400px] w-full overflow-hidden rounded-[2.5rem] shadow-xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
                {service.title}
              </h1>
              {/* ... বাকি UI ... */}
              <div className="prose max-w-none text-gray-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#EF6B35] pl-3">
                  About this service
                </h3>
                <p className="leading-relaxed text-lg text-gray-500">
                  {service.desc}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white p-8 rounded-[2rem] shadow-2xl shadow-gray-200/50 border border-gray-100">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                    Price
                  </p>
                  <p className="text-4xl font-black text-[#EF6B35]">
                    {service.price}
                  </p>
                </div>
                <div className="bg-green-50 text-green-600 p-3 rounded-2xl">
                  <ShieldCheck size={28} />
                </div>
              </div>
              <div className="space-y-5 mb-8">
                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-2xl text-gray-700">
                  <User size={20} className="text-[#EF6B35]" />
                  <span className="font-bold text-sm">{service.provider}</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-2xl text-gray-700">
                  <Clock size={20} className="text-blue-500" />
                  <span className="font-bold text-sm">
                    {service.availability}
                  </span>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-6 mb-8">
                <h4 className="font-black text-gray-900 text-sm uppercase tracking-widest mb-4">
                  Highlights:
                </h4>
                <ul className="space-y-4">
                  {service.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm font-semibold text-gray-600"
                    >
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={12} className="text-green-600" />
                      </div>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={handleBooking}
                className="w-full bg-gray-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-[#EF6B35] transition-all transform active:scale-[0.98] shadow-lg shadow-orange-100"
              >
                Book This Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
