import { PrismaAdapter } from "@auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from "../../server/db/client";
import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import { UserType } from '@prisma/client';

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    session: {
        strategy: 'jwt',
    },
    // Configure one or more authentication providers
    providers: [
        // GithubProvider
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID ?? '',
            clientSecret: process.env.GITHUB_CLIENT_SECRECT ?? '',
        }),
        // GoogleProvider
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async jwt({ token }) {
            const dbUser = await prisma.user.findUnique({
                where: { email: token.email ?? undefined },
            });
            if (dbUser) {
                token.role = dbUser.userType;
            }

            return token;
        },
        async session({ session, token }) {
            const dbUser = await prisma.user.findUnique({
                where: { email: session.user.email },
            });
            if (token) {
                session.user.userRole = dbUser?.userType as UserType;
            }
            return session;
        },
    },
};
