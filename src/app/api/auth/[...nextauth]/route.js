import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "test@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // এখানে আপনার ডাটাবেস চেক করার লজিক হবে।
        // আপাতত একটি ডামি ইউজার দেওয়া হলো টেস্ট করার জন্য:
        if (
          credentials?.email === "admin@test.com" &&
          credentials?.password === "123456"
        ) {
          return { id: "1", name: "Admin User", email: "admin@test.com" };
        }

        // লগইন ফেইল করলে null রিটার্ন করবে
        return null;
      },
    }),
  ],
  // আপনার .env ফাইলে NEXTAUTH_SECRET থাকতে হবে
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login", // আপনার কাস্টম লগইন পেজের পাথ
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
