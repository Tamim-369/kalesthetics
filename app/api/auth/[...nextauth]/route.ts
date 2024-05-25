import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import { UserInterface } from "@/types";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      const sessionUser = await User.findOne({
        email: session.user.email,
      });
      session.user.id = sessionUser._id.toString();
      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToDB();
        if (!profile) {
          throw new Error("Profile is undefined");
        }
        const userExist = await User.find({ email: profile.email });
        if (!userExist) {
          const newUser: UserInterface = {
            email: profile?.email ?? "",
            username: profile?.name?.replace(" ", "").toLowerCase() ?? "",
            image: profile?.picture,
          };
          await User.create(newUser);
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
