"use client";
import React, { createContext, useState, useEffect } from "react";

export const BookingContext = createContext(null);

const BookingContextProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const savedBookings = localStorage.getItem("my_bookings");
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("my_bookings", JSON.stringify(bookings));
  }, [bookings]);

  const addBooking = (service, userEmail) => {
    const newBooking = { ...service, userEmail };
    setBookings((prev) => [...prev, newBooking]);
  };

  const removeBooking = (id) => {
    setBookings((prevBookings) =>
      prevBookings.filter((b) => (b._id || b.id) !== id)
    );
  };

  const getUserBookings = (email) => {
    return bookings.filter((b) => b.userEmail === email);
  };
  const value = {
    bookings,
    setBookings,
    addBooking,
    getUserBookings,
    removeBooking,
  };

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};

export default BookingContextProvider;
