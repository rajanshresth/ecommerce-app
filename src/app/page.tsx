import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function Home() {
  
  return (
    <div className='flex flex-col space-y-4 '>
      <Button>
        <Link href="/api/auth/signin">
          Sign-In
        </Link>
      </Button>
      <Button>
        <Link href="/api/auth/signout">
          Sign-Out
        </Link>
      </Button>
      <Button>
        <Link href="/admin-dashboard">
          Admin Dashboard
        </Link>
      </Button>
      <Button>
        <Link href="/user-dashboard">
          User Dashboard
        </Link>
      </Button>
    </div>
  )
}

