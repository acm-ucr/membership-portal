import nextAuth from "next-auth/next";
import googleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";

export const authOptions = {
  // session: {
  //   strategy: "jwt",
  // },
  // eslint-disable-next-line new-cap
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
    }),
  }),
  providers: [
    googleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // console.log("SIGN IN CALLBACK", user);
      return true;
    },

    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl)
        ? Promise.resolve(url)
        : Promise.resolve(baseUrl);
    },

    async session({ session, user, token }) {
      // console.log("SESSION CALLBACK", session, user, token);
      session.user = user;
      return session;
    },

    async jwt({ token, user }) {
      // update token
      // if (user) {
      //   token.id = user.id;
      // }
      // console.log("TOKEN ON JWT CALLBACK", token, user);
      // return final_token
      return token;
    },
  },
  pages: {
    signIn: "/",
  },
};

export default nextAuth(authOptions);
