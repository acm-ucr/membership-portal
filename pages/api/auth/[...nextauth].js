import nextAuth from "next-auth/next";
import googleProvider from "next-auth/providers/google";

export default nextAuth({
  providers: [
    googleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, profile }) {
      console.log("USER", user);
      console.log("PROFILE", profile);
      return true;
    },

    async session({ session, user, token }) {
      console.log("SESSION", session);
      console.log("USER", user);
      console.log("TOKEN", token);
      return session;
    },
  },
  secret: process.env.NEXT_PUBLIC_JWT_TOKEN,
});
