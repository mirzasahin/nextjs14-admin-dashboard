import NextAuth from "next-auth";
import { authConfig } from "./authconfig";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";
import bcrypt from "bcrypt";
import Credentials from "next-auth/providers/credentials";

const login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("User not found!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          console.log(err);
          throw new Error("Failed to login!");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session;
    },
  }, 
});
