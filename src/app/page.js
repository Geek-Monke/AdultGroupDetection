import Homepage from "@/components/Homepage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home(){
  return(
    <div className='bg-zinc-900'>
      <div className='top-0 left-0 flex justify-between px-12 pt-4'>
        <div className='flex gap-4'>
          <Button variant='secondary'>Leaderboard</Button>
          <Button variant='secondary'>Groups</Button>
        </div>
        <Badge>user1</Badge>
      </div>
      <Homepage/>
    </div>
  )
}