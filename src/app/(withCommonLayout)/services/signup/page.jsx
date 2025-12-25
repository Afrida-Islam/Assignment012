"use client";

import { UserContext } from "../../../Context/user.context";
import { useRouter } from "next/navigation";
import { use, useState, useMemo } from "react";
import Link from "next/link";
import { Eye, EyeOff, Loader2, ArrowRight, ArrowLeft } from "lucide-react";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    // পাসওয়ার্ড ম্যাচ চেক
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // ১. আগের ইউজারদের লিস্ট আনা
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    // ২. ইমেইল চেক
    const userExists = existingUsers.find((u) => u.email === email);
    if (userExists) {
      alert("User already exists with this email!");
      setIsLoading(false);
      return;
    }

    // ৩. নতুন ইউজার সেভ করা
    const newUser = { name, email, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    localStorage.setItem("logged_in_user", JSON.stringify(newUser));
    // ৪. সেশন সেট করা
    setUser({ name, email });
    alert("Account Created Successfully!");
    router.push("/services"); // অথবা আপনার পছন্দের ড্যাশবোর্ড পাথ
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#FFF5F1] px-4">
      <div className="relative w-full max-w-xl">
        <Link
          href="/"
          className="flex items-center gap-2 text-[#EF6B35] font-semibold mb-6 hover:underline"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>

        <div className="rounded-[2.5rem] bg-white p-8 shadow-2xl sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-extrabold text-[#3D3D3D]">
                Create Account
              </h1>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-orange-400">
                  Full Name
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-2xl bg-gray-50 px-5 py-4 outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-orange-400">
                  Email
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-2xl bg-gray-50 px-5 py-4 outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-orange-400">
                Password
              </label>
              <div className="relative">
                <input
                  required
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  className="w-full rounded-2xl bg-gray-50 px-5 py-4 outline-none focus:ring-2 focus:ring-black"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field (এটি আন-কমেন্ট করা হয়েছে) */}
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-orange-400">
                Confirm Password
              </label>
              <input
                required
                name="confirmPassword"
                type="password"
                className="w-full rounded-2xl bg-gray-50 px-5 py-4 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              disabled={isLoading}
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#EF6B35] py-4 text-xl font-bold text-white hover:bg-[#e85a20]"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  Create Account <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
