// NextAuth.js v5 configuration reference.
// Install next-auth before using:
//   pnpm add next-auth@beta @auth/prisma-adapter
//
// import NextAuth from "next-auth";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { prisma } from "@/lib/prisma";
//
// export const { handlers, auth, signIn, signOut } = NextAuth({
//   adapter: PrismaAdapter(prisma),
//   session: { strategy: "jwt" },
//   providers: [],
//   callbacks: {
//     session({ session, token }) {
//       if (session.user && token.sub) {
//         session.user.id = token.sub;
//       }
//       return session;
//     },
//   },
// });

export const authConfig = {
  // Will be populated when next-auth is installed per project needs.
} as const;