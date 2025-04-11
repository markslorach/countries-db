import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { nextCookies } from "better-auth/next-js";

const prisma = new PrismaClient();
export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 15 * 60,
    },
  },
  // socialProviders: {
  //    google: {
  //     clientId: process.env.GOOGLE_CLIENT_ID || "",
  //     clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
  //    }
  // },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  plugins: [nextCookies()],
});
