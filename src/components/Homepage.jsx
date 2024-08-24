'use client'

import React from 'react'
import { useSession, signOut, signIn } from 'next-auth/react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

function Homepage() {

    const session = useSession();
    const user = session?.data?.user;
    const router = useRouter();

    const signInHandler = () => {
        router.push('/api/auth/signin')
      }
    


  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center'>

        <h1 className='text-[3rem] text-center'>Welcome to <span className='text-red-600'>Adult</span> Content Blocker</h1>

        
        <div className='max-w-xs w-full mt-16'>
        {user ? 
            <div className='flex flex-col space-y-5'>
                <Input placeholder="Enter telegram grp name"/>
                <div className='max-w-xs w-full flex justify-center items-center'>
                <Button>Report</Button>
                </div>
            </div>
        : <div className='max-w-xs w-full flex justify-center items-center'>
            <Button onClick={signInHandler}>Sign In</Button>    
        </div>}
        </div>
    </div>
  )
}

export default Homepage