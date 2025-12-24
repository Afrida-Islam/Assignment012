"use client";

import { UserContext } from "../../../Context/user.context";
import { useRouter } from "next/navigation";
import { use, useState, useMemo } from "react";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  Loader2,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const SignupPage = () => {
  const { setUser } = use(UserContext);
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");

  const strength = useMemo(() => {
    if (!password) return 0;
    let s = 0;
    if (password.length > 7) s += 1;
    if (/[A-Z]/.test(password)) s += 1;
    if (/[0-9]/.test(password)) s += 1;
    if (/[^A-Za-z0-9]/.test(password)) s += 1;
    return s;
  }, [password]);

  // SignupPage.jsx এর handleSubmit ফাংশনটি এভাবে আপডেট করুন:

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    // ১. আগের সেভ করা ইউজারদের লিস্ট নিয়ে আসা (যদি থাকে)
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    // ২. ইমেইল অলরেডি আছে কি না চেক করা
    const userExists = existingUsers.find((u) => u.email === email);
    if (userExists) {
      alert("User already exists with this email!");
      setIsLoading(false);
      return;
    }

    // ৩. নতুন ইউজার লিস্টে যোগ করা
    const newUser = { name, email, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // ৪. বর্তমান সেশন সেট করা
    setUser({ name, email });
    alert("Account Created Successfully!");
    router.push("/services");
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#FFF5F1] px-4">
      <div className="relative w-full max-w-xl">
        <Link
          href="/"
          className="flex items-center gap-2 text-[#EF6B35] font-semibold mb-6 hover:underline transition-all"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <div className="rounded-[2.5rem] border border-white/40 bg-white/70 p-8 shadow-2xl backdrop-blur-2xl sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-extrabold text-[#3D3D3D] tracking-tight">
                Welcome Back
              </h1>
              <p className="mt-2 text-[#4A4A4A] font-medium">
                Access your CareZone dashboard
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-orange-400 ml-1">
                  Full Name
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-2xl border-none bg-white px-5 py-4 text-sm shadow-sm transition-all focus:ring-2 focus:ring-black outline-none"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-orange-400 ml-1">
                  Email
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full rounded-2xl border-none bg-white px-5 py-4 text-sm shadow-sm transition-all focus:ring-2 focus:ring-black outline-none"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-widest text-orange-400 ml-1">
                Password
              </label>
              <div className="relative">
                <input
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  placeholder="******"
                  className={`w-full rounded-2xl border-b-4 bg-orange px-5 py-4 text-sm shadow-sm transition-all focus:ring-2 focus:ring-black outline-none ${
                    strength === 0
                      ? "border-transparent"
                      : strength === 1
                      ? "border-red-400"
                      : strength === 2
                      ? "border-orange-400"
                      : strength === 3
                      ? "border-yellow-400"
                      : "border-green-400"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <div className="flex justify-between px-1 mt-1">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                  Secure encryption enabled
                </p>
                <p className="text-[10px] font-bold text-gray-600 uppercase">
                  Strength: {strength}/4
                </p>
              </div>
            </div>

            {/* Confirm Password */}
            {/* <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-widest text-orange-400 ml-1">
                Confirm Password
              </label>
              <input
                required
                name="confirmPassword"
                type="password"
                placeholder="******"
                className="w-full rounded-2xl border-none bg-white px-5 py-4 text-sm shadow-sm transition-all focus:ring-2 focus:ring-black outline-none"
              />
            </div> */}

            <button
              disabled={isLoading}
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#EF6B35] py-4 text-xl font-bold text-white shadow-lg shadow-orange-200 hover:bg-[#e85a20]"
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  Create Account <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Social Footer */}
          <div className="mt-10 border-t border-gray-100 pt-8 text-center">
            <p className="text-sm font-medium text-gray-500">
              Already have an account?
              <Link
                href="/services/login"
                className="text-black font-bold hover:underline"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom Trust Badge */}
        <div className="mt-8 flex justify-center gap-8 opacity-50 grayscale transition-all hover:grayscale-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em]">
            HIPAA Compliant
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em]">
            ISO 27001
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em]">
            End-to-End Encrypted
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
