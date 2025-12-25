"use client";

import { useState, useMemo, use } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  MapPin,
  CheckCircle2,
  CreditCard,
  Loader2,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import localServices from "../../../../data/services.json";
import { BookingContext } from "../../../../Context/booking.context";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";

const BookingPage = () => {
  const { service_id } = useParams();
  const router = useRouter();

  const { addBooking } = use(BookingContext);
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [duration, setDuration] = useState(1);
  const [location, setLocation] = useState({
    division: "",
    district: "",
    city: "",
    address: "",
  });
  const service = localServices.find((s) => s.id === parseInt(service_id));
  const unitPrice = service
    ? parseInt(service.price.replace(/[^0-9]/g, ""))
    : 0;
  const totalCost = useMemo(() => duration * unitPrice, [duration, unitPrice]);

  const handleNextStep = () => setStep((prev) => prev + 1);
  const handlePrevStep = () => setStep((prev) => prev - 1);
  const confirmBooking = async () => {
    setIsLoading(true);

    const bookingData = {
      _id: Date.now().toString(),
      id: service_id,
      title: service?.title,
      image: service?.image,
      category: service?.category,
      provider: service?.provider,
      duration,
      location,
      price: `$${totalCost}`,
      status: "Pending",
      bookedAt: new Date().toLocaleString(),
    };
    addBooking(bookingData);
    await new Promise((res) => setTimeout(res, 2000));
    setIsLoading(false);

    alert("Booking Saved Successfully!");
    router.push("/mybooking");
  };

  if (!service)
    return (
      <div className="p-20 text-center font-bold">Loading Service Data...</div>
    );

  return (
    <section className="min-h-screen bg-[#FDF8F6] py-12 px-4">
      <Navbar />
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between mb-12 relative px-4">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-orange-100 -translate-y-1/2 z-0"></div>
          <div
            className="absolute top-1/2 left-0 h-1 bg-[#EF6B35] -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${((step - 1) / 3) * 100}%` }}
          ></div>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                step >= i
                  ? "bg-[#EF6B35] text-white scale-110"
                  : "bg-white text-gray-400 border-2 border-orange-50"
              }`}
            >
              {step > i ? <CheckCircle2 size={18} /> : i}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-orange-200/30 border border-orange-50">
          {/* STEP 1: Duration */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <h2 className="text-3xl font-black text-gray-800">
                1. Select Duration
              </h2>
              <p className="text-gray-500">
                Choose how many hours/days you need{" "}
                <span className="text-[#EF6B35] font-bold">
                  {service.title}
                </span>
              </p>
              <div className="flex items-center gap-6 p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                <button
                  onClick={() => setDuration(Math.max(1, duration - 1))}
                  className="w-16 h-16 rounded-2xl bg-white text-3xl font-bold shadow-sm hover:bg-orange-50 transition-all"
                >
                  {" "}
                  -{" "}
                </button>
                <div className="flex-1 text-center">
                  <span className="text-6xl font-black text-[#EF6B35]">
                    {duration}
                  </span>
                  <p className="font-bold text-gray-400 uppercase tracking-widest text-xs mt-2">
                    Total Units
                  </p>
                </div>
                <button
                  onClick={() => setDuration(duration + 1)}
                  className="w-16 h-16 rounded-2xl bg-black text-white text-3xl font-bold shadow-lg hover:bg-[#EF6B35] transition-all"
                >
                  {" "}
                  +{" "}
                </button>
              </div>
              <button
                onClick={handleNextStep}
                className="w-full py-5 bg-[#EF6B35] text-white rounded-2xl font-bold text-lg shadow-lg"
              >
                Next: Location Details
              </button>
              <button
                onClick={() => router.push("/services")}
                className="text-sm font-bold text-gray-400 hover:text-black transition-colors"
              >
                Cancel and start over
              </button>
            </div>
          )}

          {/* STEP 2: Location */}
          {step === 2 && (
            <div className="space-y-5 animate-in fade-in slide-in-from-right-4">
              <h2 className="text-2xl font-black text-gray-800 flex items-center gap-2">
                <MapPin className="text-[#EF6B35]" /> 2. Service Location
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  placeholder="Division (e.g. Dhaka)"
                  className="w-full p-4 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-[#EF6B35]/20"
                  onChange={(e) =>
                    setLocation({ ...location, division: e.target.value })
                  }
                />
                <input
                  placeholder="District"
                  className="w-full p-4 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-[#EF6B35]/20"
                  onChange={(e) =>
                    setLocation({ ...location, district: e.target.value })
                  }
                />
              </div>
              <input
                placeholder="City/Area Name"
                className="w-full p-4 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-[#EF6B35]/20"
                onChange={(e) =>
                  setLocation({ ...location, city: e.target.value })
                }
              />
              <textarea
                placeholder="Full Street Address"
                rows={3}
                className="w-full p-4 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-[#EF6B35]/20"
                onChange={(e) =>
                  setLocation({ ...location, address: e.target.value })
                }
              />
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handlePrevStep}
                  className="flex-1 py-4 font-bold text-[#EF6B35]"
                >
                  Back
                </button>
                <button
                  onClick={handleNextStep}
                  className="flex-[2] py-4 bg-[#EF6B35] text-white rounded-2xl font-bold"
                >
                  Review Price
                </button>
              </div>
              <button
                onClick={() => router.push("/services")}
                className="text-sm font-bold text-gray-400 hover:text-black transition-colors"
              >
                Cancel and start over
              </button>
            </div>
          )}

          {/* STEP 3: Price Review */}
          {step === 3 && (
            <div className="space-y-6 animate-in zoom-in-95">
              <h2 className="text-2xl font-black text-gray-800">
                3. Price Summary
              </h2>
              <div className="bg-orange-50/50 rounded-3xl p-8 border border-orange-100">
                <div className="flex justify-between mb-4">
                  <span className="text-gray-500">Service Rate</span>
                  <span className="font-bold text-gray-800">
                    {service.price} / unit
                  </span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-500">Duration</span>
                  <span className="font-bold text-gray-800">
                    {duration} Units
                  </span>
                </div>
                <div className="h-[1px] bg-orange-200 w-full my-6 border-dashed border-t-2"></div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs font-black uppercase text-orange-400">
                      Total Amount
                    </p>
                    <p className="text-5xl font-black text-[#EF6B35]">
                      ${totalCost}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handlePrevStep}
                  className="flex-1 py-4 font-bold text-[#EF6B35]"
                >
                  Back
                </button>
                <button
                  onClick={handleNextStep}
                  className="flex-[2] py-4 bg-[#EF6B35] text-white rounded-2xl font-bold shadow-lg"
                >
                  Confirm Booking
                </button>
              </div>
              <button
                onClick={() => router.push("/services")}
                className="text-sm font-bold text-gray-400 hover:text-black transition-colors"
              >
                Cancel and start over
              </button>
            </div>
          )}

          {/* STEP 4: Final Confirmation */}
          {step === 4 && (
            <div className="text-center space-y-6 animate-in fade-in scale-95">
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={48} />
              </div>
              <h2 className="text-3xl font-black text-gray-800">
                Confirm Booking?
              </h2>
              <p className="text-gray-500 px-6">
                Your request for{" "}
                <span className="font-bold text-black">{service.title}</span>{" "}
                will be processed.
              </p>

              <div className="pt-6 space-y-3">
                <button
                  disabled={isLoading}
                  onClick={confirmBooking}
                  className="w-full py-5 bg-black text-white rounded-3xl font-black text-xl flex items-center justify-center gap-3 hover:bg-[#EF6B35] transition-all shadow-xl"
                >
                  {isLoading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      {" "}
                      <CreditCard /> Confirm & Pay ${totalCost}{" "}
                    </>
                  )}
                </button>
                <button
                  onClick={() => router.push("/services")}
                  className="text-sm font-bold text-gray-400 hover:text-black transition-colors"
                >
                  Cancel and start over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default BookingPage;
