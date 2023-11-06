import { authOptions } from '@/lib/auth/authOptions'
import { getServerSession } from 'next-auth'
import React from 'react'

const UserDashboard = async() => {
    const session = await getServerSession(authOptions)
    if(session?.user.userRole === "User"){
        return <p>You are a user, welcome!</p>
    }
}

export default UserDashboard