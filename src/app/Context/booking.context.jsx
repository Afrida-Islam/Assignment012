"use client";
import React, { createContext, useState, useEffect } from "react";

export const BookingContext = createContext(null);

const BookingContextProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  // ১. পেজ লোড হওয়ার সময় LocalStorage থেকে ডেটা আনা
  useEffect(() => {
    const savedBookings = localStorage.getItem("my_bookings");
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  }, []);

  // ২. যখনই bookings পরিবর্তন হবে, সাথে সাথে LocalStorage আপডেট হবে
  // (length > 0 শর্তটি সরিয়ে দিয়েছি যাতে শেষ বুকিং ডিলিট করলেও সেটি সেভ হয়)
  useEffect(() => {
    localStorage.setItem("my_bookings", JSON.stringify(bookings));
  }, [bookings]);

  const addBooking = (service) => {
    setBookings((prevBookings) => [...prevBookings, service]);
  };

  const removeBooking = (id) => {
    setBookings((prevBookings) =>
      prevBookings.filter((b) => (b._id || b.id) !== id)
    );
  };

  // এখানে setBookings এবং removeBooking দুটোই রাখা হয়েছে যাতে পেজ থেকে যেকোনোটি কল করা যায়
  const value = {
    bookings,
    setBookings,
    addBooking,
    removeBooking,
  };

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};

export default BookingContextProvider;
