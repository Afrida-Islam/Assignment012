"use client";
import React, { createContext, useState, useEffect } from "react";

export const BookingContext = createContext(null);

const BookingContextProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  // ১. পেজ লোড হওয়ার সময় LocalStorage থেকে ডেটা আনা
  useEffect(() => {
    const savedBookings = localStorage.getItem("my_bookings");
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  }, []);
  useEffect(() => {
    if (bookings.length > 0) {
      localStorage.setItem("my_bookings", JSON.stringify(bookings));
    }
  }, [bookings]);

  const addBooking = (service) => {
    setBookings((prevBookings) => [...prevBookings, service]);
  };

  const removeBooking = (id) => {
    const filtered = bookings.filter((b) => b._id !== id);
    setBookings(filtered);
    localStorage.setItem("my_bookings", JSON.stringify(filtered));
  };

  const value = {
    bookings,
    addBooking,
    removeBooking,
  };

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};

export default BookingContextProvider;
