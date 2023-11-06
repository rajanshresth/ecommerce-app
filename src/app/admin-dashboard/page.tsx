import { authOptions } from "@/lib/auth/authOptions"
import { getServerSession } from "next-auth"

export default async function Page() {
  const session= await getServerSession(authOptions)
  if (session?.user.userRole === "Admin") {
    return <p>You are an admin, welcome!</p>
  }
}