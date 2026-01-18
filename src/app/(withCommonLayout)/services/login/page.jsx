"use client";

import { UserContext } from "../../../Context/user.context";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie"; // Import js-cookie
import { ArrowLeft, Lock, Mail, Loader2, LogIn } from "lucide-react";

const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Hardcoded Credentials
  const MOCK_USER = {
    email: "admin@carezone.com",
    password: "password123",
    name: "Admin User"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    // Simulate API delay
    await new Promise((res) => setTimeout(res, 800));

    // Check against Hardcoded Credentials OR LocalStorage (Fallback)
    const allUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = (email === MOCK_USER.email && password === MOCK_USER.password) 
      ? MOCK_USER 
      : allUsers.find((u) => u.email === email && u.password === password);

    if (foundUser) {
      // 1. Store session in Cookies (expires in 7 days)
      Cookies.set("user_session", JSON.stringify({ email: foundUser.email }), { expires: 7 });
      
      // 2. Update Global Context
      setUser({
        email: foundUser.email,
        name: foundUser.name,
      });

      // 3. Redirect to items/lists page
      router.push("/items/lists");
    } else {
      alert("Invalid email or password. Hint: admin@carezone.com / password123");
      setIsLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#FFF5F1] px-4">
      {/* ... Your existing JSX remains the same ... */}
    </section>
  );
};

export default LoginPage;