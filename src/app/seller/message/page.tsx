import { getServerSession } from 'next-auth';
import React from 'react';

const Message = async () => {
    const getSession = getServerSession();
    const session = await getSession.then((session) => session);
    if (session?.user.userRole === 'Admin') {
        return (
            <div>
                <h1>Admin</h1>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Wait for 1-2 business day</h1>
            </div>
        );
    }
};

export default Message;
