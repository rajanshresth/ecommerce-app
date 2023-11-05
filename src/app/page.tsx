import { Button } from '@/components/ui/button'
import prisma from '@/server/db/client'

export default async function Home() {
  const user = await prisma.user.findMany();
  return (
    <main className='flex flex-col space-y-2'>
      <h1>Rajan</h1>
      {user.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
      <Button className='bg-blue-400 hover:bg-blue-600 w-20'>Click me!!!</Button>
    </main>
  )
}
