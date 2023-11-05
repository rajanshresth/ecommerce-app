import { PrismaAdapter } from "@auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from "../db/client";


export const authOptions = {
  adapter: PrismaAdapter(prisma),
    // Configure one or more authentication providers
    providers: [
      //GithubProvider
      GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID ?? '',
        clientSecret: process.env.GITHUB_CLIENT_SECRECT ?? '',
      }),
      // GoogleProvider
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
      })
    ],
}