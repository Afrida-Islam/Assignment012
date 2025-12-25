"use client";
import React, { createContext, useState } from "react";

export const BookingContext = createContext(null);

const BookingContextProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  const addBooking = (service) => {
    setBookings((prevBookings) => [...prevBookings, service]);
  };

  const value = {
    bookings,
    addBooking,
  };

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};

export default BookingContextProvider;