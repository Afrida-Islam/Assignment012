"use client";

import { UserContext } from "../../../Context/user.context";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Lock, Mail, Loader2, LogIn } from "lucide-react";

const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    await new Promise((res) => setTimeout(res, 800));
    const allUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = allUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      // লগইন সফল
      setUser({
        email: foundUser.email,
        name: foundUser.name,
      });
      router.push("/dashboard");
    } else {
      // লগইন ব্যর্থ
      alert(
        "Invalid email or password. Please sign up if you don't have an account."
      );
      setIsLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#FFF5F1] px-4">
      <div className="w-full max-w-md">
        {/* Back to Home Link */}
        <Link
          href="/"
          className="flex items-center gap-2 text-[#EF6B35] font-semibold mb-6 hover:translate-x-[-4px] transition-all"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <div className="rounded-[2.5rem] bg-white p-10 shadow-2xl shadow-orange-200/40 border border-orange-50">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-[#3D3D3D] tracking-tight">
              Welcome Back
            </h1>
            <p className="mt-2 text-[#4A4A4A] font-medium opacity-80">
              Access your CareZone dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-[#3D3D3D] ml-1">
                Email Address
              </label>
              <div className="relative group">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#EF6B35] transition-colors"
                  size={18}
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-12 py-4 text-sm outline-none focus:bg-white focus:border-[#EF6B35] focus:ring-4 focus:ring-[#EF6B35]/10 transition-all text-black"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="block text-sm font-bold text-[#3D3D3D]">
                  Password
                </label>
                <Link
                  href="#"
                  className="text-xs text-[#EF6B35] font-bold hover:underline"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative group">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#EF6B35] transition-colors"
                  size={18}
                />
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="******"
                  className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-12 py-4 text-sm outline-none focus:bg-white focus:border-[#EF6B35] focus:ring-4 focus:ring-[#EF6B35]/10 transition-all text-black"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              disabled={isLoading}
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#EF6B35] py-4 text-sm font-bold text-white shadow-xl shadow-orange-200 hover:bg-[#e85a20] transition-all active:scale-[0.98] disabled:opacity-70 cursor-pointer"
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <LogIn size={18} />
                  Sign In
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-[#4A4A4A]">
            New to CareZone?{" "}
            <Link
              href="/signup"
              className="font-extrabold text-[#EF6B35] hover:underline underline-offset-4"
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
