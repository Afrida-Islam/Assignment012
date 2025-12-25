"use client";
import { SessionProvider } from "next-auth/react";
import BookingContextProvider from "../../Context/booking.context";
import UserContextProvider from "../../Context/user.context.jsx";
import React from "react";

const Providers = ({ children }) => {
  return (
    <SessionProvider>
      <UserContextProvider>
        <BookingContextProvider>{children}</BookingContextProvider>
      </UserContextProvider>
    </SessionProvider>
  );
};

export default Providers;
