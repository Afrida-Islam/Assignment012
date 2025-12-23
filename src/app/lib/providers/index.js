"use client";
// import { SessionProvider } from "next-auth/react";
// import BookingsContextProvider from "@/context/booking.context";
import UserContextProvider from "../../Context/user.context";
import React from "react";

const Providers = ({ children }) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};

export default Providers;
