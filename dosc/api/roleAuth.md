# Role-Based Authorization

## Database Schema (`schema.prisma`)

The database model for user authentication and role-based authorization is defined in a Prisma schema file named `schema.prisma`. This schema consists of four main models: `Account`, `Session`, `User`, and `VerificationToken`.

```prisma
model Account {
  // Fields related to user accounts
}

model Session {
  // Fields related to user sessions
}

model User {
  // Fields related to user data and authentication
}

model VerificationToken {
  // Fields related to user email verification
}
```

## Authentication Configuration (authOptions.tsx)
In the `authOptions.tsx ` file, we configure the authentication options for Next.js using NextAuth.js. This file sets up the authentication adapter, authentication providers (e.g., GitHub and Google), and defines callbacks to handle user roles.

```typescript
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
    providers: [
        GitHubProvider({
            // GitHub authentication configuration
        }),
        GoogleProvider({
            // Google authentication configuration
        }),
    ],
    callbacks: {
        async jwt({ token }) {
            // Retrieve user role from the database and set it in the token
        },
        async session({ session, token }) {
            // Retrieve user role and update the session
        },
    },
};
```

## Token and Session Handling
The `authOptions` file defines two important callbacks:
1. `jwt({ token })`: In this callback, we fetch the user's role from the database based on their email. If a user exists, we set the token.role to the user's role.

2. `session({ session, token })`: This callback updates the user's session with their role obtained from the database.

## Using Session Data
The session data is utilized in both client and server components of your application. Depending on the user's role, different components are conditionally rendered. For example, we have a `Dashboard `component that checks the user's role and displays either the admin dashboard or the user dashboard.

```typescript
import { authOptions } from '@/lib/auth/authOptions'
import { getServerSession } from 'next-auth'
import React from 'react'
import AdminDashboard from './admin-dashboard/page'
import UserDashboard from './user-dashboard/page'

const Dashboard = async() => {
    const session = await getServerSession(authOptions);

    if (session?.user.userRole === "Admin") {
        return (
            <div>
                <AdminDashboard />
            </div>
        )
    }

    if (session?.user.userRole === "User") {
        return (
            <div>
                <UserDashboard />
            </div>
    )
}

export default Dashboard
```
In this component, the `getServerSession `function is used to fetch the user's session, and then the appropriate dashboard is displayed based on their role.