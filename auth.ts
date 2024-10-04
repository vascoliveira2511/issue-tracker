import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/prisma/client";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google, GitHub],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth;
    },
  },
});
