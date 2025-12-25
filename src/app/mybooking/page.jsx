"use client";
import ServiceCard from "../(withCommonLayout)/services/_component/ServiceCard";
import { BookingContext } from "../Context/booking.context";
import React, { use, useEffect, useState } from "react";

const MyBookings = () => {
  const { bookings } = use(BookingContext);
  const [mounted, setMounted] = useState(false);

  // Hydration error এড়াতে এবং Client side এ ডেটা নিশ্চিত করতে
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="p-20 text-center">Loading Bookings...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-10 min-h-screen">
      <h1 className="text-3xl font-black mb-10 text-gray-800">My Bookings</h1>

      {!bookings || bookings.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
          <h2 className="font-bold text-4xl text-gray-300">No bookings yet</h2>
          <p className="text-gray-400 mt-2">
            Go to services to book your first care.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((item) => (
            // এখানে নিশ্চিত করুন key এবং props ঠিক আছে
            <ServiceCard service={item} key={item._id || item.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
