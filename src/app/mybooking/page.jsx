"use client";

import { BookingContext } from "../Context/booking.context";
import React, { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin, CreditCard, ExternalLink, XCircle } from "lucide-react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MyBookings = () => {
  const { bookings, setBookings } = use(BookingContext);

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "confirmed":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "completed":
        return "bg-blue-100 text-blue-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const renderLocation = (loc) => {
    if (!loc) return "Location not provided";
    if (typeof loc === "object") {
      return `${loc.address || ""}, ${loc.city || ""}`.replace(/^, /, "");
    }
    return loc;
  };

  // ২. ক্যানসেল করার ফাংশন
  const handleCancel = (id) => {
    const confirmDelete = confirm(
      "Are you sure you want to cancel this booking?"
    );
    if (confirmDelete) {
      // কনটেক্সট থেকে ওই নির্দিষ্ট আইডি বাদ দিয়ে নতুন লিস্ট সেট করা
      const updatedBookings = bookings.filter((b) => (b._id || b.id) !== id);
      setBookings(updatedBookings);
      alert("Booking cancelled successfully!");
    }
  };

  const fallbackImage = "https://via.placeholder.com/200x200?text=No+Image";

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-gray-100 bg-white transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2">
      <Navbar />
      <div className="flex justify-between items-center mb-10 mt-10 ml-10">
        <h1 className="text-4xl font-black text-gray-800 tracking-tight ">
          My Bookings
        </h1>
        <span className="bg-orange-100 text-[#EF6B35] px-4 py-1 rounded-full text-sm font-bold">
          Total: {bookings?.length || 0}
        </span>
      </div>

      {!bookings || bookings.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200 shadow-sm ">
          <h2 className="font-bold text-4xl text-gray-300 italic">
            No bookings yet
          </h2>
          <Link href="/services">
            <button className="mt-6 bg-[#EF6B35] text-white rounded-2xl font-bold text-lg shadow-lg py-3 px-8">
              Book a Service
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 mb-10">
          {bookings.map((item) => {
            const bookingId = item._id || item.id;
            return (
              <div
                key={bookingId}
                className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-6"
              >
                <div className="relative h-28 w-full md:w-28 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src={
                      item.image && item.image !== ""
                        ? item.image
                        : fallbackImage
                    }
                    alt={item.title || "service"}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 w-full">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <span
                      className={`text-[10px] uppercase font-black px-3 py-1 rounded-full ${getStatusColor(
                        item.status || "Pending"
                      )}`}
                    >
                      {item.status || "Pending"}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock size={16} className="text-[#EF6B35]" />
                      <span className="text-sm font-medium">
                        {item.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <MapPin size={16} className="text-[#EF6B35]" />
                      <span className="text-sm font-medium line-clamp-1">
                        {renderLocation(item.location)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <CreditCard size={16} className="text-[#EF6B35]" />
                      <span className="text-sm font-bold text-gray-900">
                        {item.price || item.totalCost}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0">
                  <Link
                    href={`/services/${bookingId}`}
                    className="flex-1 md:flex-none"
                  >
                    <button className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold py-3 px-5 rounded-2xl text-sm border border-gray-200 transition-all">
                      <ExternalLink size={16} /> View
                    </button>
                  </Link>

                  {/* ৩. বাটন ক্লিক করলে handleCancel কল হবে */}
                  <button
                    onClick={() => handleCancel(bookingId)}
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 font-bold py-3 px-5 rounded-2xl text-sm border border-red-100 transition-all"
                  >
                    <XCircle size={16} /> Cancel
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default MyBookings;
