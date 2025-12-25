"use client";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // সার্ভার রিস্টার্ট দিলেও যেন লগআউট না হয় তার জন্য এই অংশটি:
  useEffect(() => {
    const savedUser = localStorage.getItem("logged_in_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
