import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function Home() {
  
  return (
    <div className='flex space-x-4 '>
      <Button>
        <Link href='/'>Home</Link>
      </Button>
      <Button>
        <Link href='/dashboard'>
          Dashboard
        </Link>
      </Button>
      <Button>
        <Link href='/api/auth/signout'>
          Logout
        </Link>
      </Button>
    </div>
  )
}

