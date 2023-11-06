import { authOptions } from '@/lib/auth/authOptions'
import { getServerSession } from 'next-auth'
import React from 'react'
import AdminDashboard from './admin-dashboard/page'
import UserDashboard from './user-dashboard/page'

const Dashboard = async() => {
    const session= await getServerSession(authOptions)

  if(session?.user.userRole === "Admin"){
    return (
        <div>
            <AdminDashboard />
        </div>
    )
  }
    if(session?.user.userRole === "User"){
        return (
            <div>
                <UserDashboard />
            </div>
        )
    }
}

export default Dashboard