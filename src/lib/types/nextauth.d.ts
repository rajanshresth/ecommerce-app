import { type UserType } from '@prisma/client';

declare module 'next-auth' {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            /** The user's postal address. */
            name: string;
            email: string;
            userRole: UserType;
            image: string;
        };
    }
    interface User {
        name: string;
        email: string;
        image: string;
        userRole: UserType;
    }
}

declare module 'next-auth/jwt' {
    interface token {
        userRole: UserType;
    }
}
