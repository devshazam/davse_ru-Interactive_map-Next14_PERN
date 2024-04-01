import NextAuth from "next-auth";
import type { NextAuthConfig, User } from "next-auth";
// import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
// import GitHubProvider from "next-auth/providers/github";
import YandexProvider from "next-auth/providers/yandex";
import VkProvider from "next-auth/providers/vk";


declare module "next-auth" {
  interface Session {
    user: {
      picture?: string;
    } & Omit<User, "id">;
  }
}

export const authConfig = {
  // debug: true, // только для разработки
  providers: [
    YandexProvider({
      clientId: process.env.YANDEX_CLIENT_ID,
      clientSecret: process.env.YANDEX_CLIENT_SECRET
    }),
    GitHub,
    // GitHubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET
    // }),
    VkProvider({
      clientId: process.env.VK_CLIENT_ID,
      clientSecret: process.env.VK_CLIENT_SECRET
    })

  ],
  callbacks: {
    authorized(params) {
      console.log(params.auth)
      return !!params.auth?.user;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
