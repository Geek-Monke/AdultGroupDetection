import React from 'react'
import { Button } from "@/components/ui/button";

function Nav() {
  return (
    <div className='top-0 left-0 flex justify-between px-12 pt-4'>
        <div className='flex gap-4'>
        <Button variant='secondary'>Leaderboard 🏆</Button>
        <Button variant='secondary'>Groups</Button>
        </div>
        <p>anonymous user</p>
    </div>
    )
}

export default Nav;