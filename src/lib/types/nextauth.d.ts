import { type UserType } from "@prisma/client"
import NextAuth from "next-auth"


declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      name: string
      email: string
      userRole: UserType
    }
  }
  interface User {
    name: string
    email: string
    userRole: UserType
  }
}

declare module "next-auth/jwt" {
    interface token{
        userRole: UserType
    }
}