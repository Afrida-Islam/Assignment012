"use client";
import { BookingContext } from "../../../Context/booking.context";
import React, { use } from "react";

const BookingBtn = ({ service }) => {
  const { bookings, addBooking, removeBooking } = use(BookingContext);
  const isAlreadyBooking = bookings?.find((b) => b?._id === service?._id);

  return (
    <button
      disabled={service.isDeleted}
      className={`w-full rounded-xl py-3 text-sm font-semibold transition ${
        service.isDeleted
          ? "cursor-not-allowed bg-gray-300 text-gray-600"
          : "bg-black text-white hover:bg-gray-900"
      }`}
      onClick={() =>
        isAlreadyBooking ? removeBooking(service?._id) : addBooking(service)
      }
    >
      {service.isDeleted
        ? "Service Unavailable"
        : isAlreadyBooking
        ? "Un book This service"
        : "Book This Service"}
    </button>
  );
};

export default BookingBtn;
