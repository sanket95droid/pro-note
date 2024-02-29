import TipTapEditor from '@/components/TipTapEditor'
import { Button } from '@/components/ui/button'
import { clerk } from '@/lib/clerk-server'
import { db } from '@/lib/db'
import { $notes } from '@/lib/db/schema'
import { auth } from '@clerk/nextjs'
import { and, eq } from 'drizzle-orm'
import { ArrowLeft, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    params: {
        noteID: string
    }
}

const Notebookpage = async ({params: {noteID}}: Props) => {
    const {userId} = await auth()
    if(!userId){
        return redirect("/dashboard")
    }

    const user = await clerk.users.getUser(userId)
    const notes = await db.select().from($notes).where(and(eq($notes.id, parseInt(noteID)), eq($notes.userId, userId)))

    if(notes.length != 1)
    {
      return redirect("/dashboard")
    }
    const note = notes[0]
    
  return (
    <div className="min-h-screen p-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center md:flex-row flex-col bg-[#121212] p-6 rounded-[6px] shadow-xl">
            <div className='flex items-center justify-center'>
                <Link href='/dashboard'>
                  <Button size="sm" className="hover:scale-110 transition ease-in-out delay-75 bg-[#bd0e32] text-white font-semibold rounded-[8px] hover:bg-white hover:text-[#222831] duration-200 p-2">
                    <ArrowLeft className="mr-2 w-5 h-5"/>
                      Back
                    </Button>
                </Link>
                  <div className="w-6"></div>
                  <span className="text-white font-semibold"> {user.firstName} {user.lastName}</span>
                  <span className="text-white inline-block mx-1">/</span>
                  <span className="text-white "></span>
                  <h1 className="text-[#bd0e32] font-semibold">{note.name}</h1>
                  <div className="w-6"></div>
                  <Button size="sm" className="hover:scale-110 transition ease-in-out delay-75 bg-white text-black font-semibold rounded-[8px] hover:bg-[#bd0e32] hover:text-white duration-200 p-2">
                    <Trash2 className='w-5 h-5'/>
                  </Button>
              </div>
          </div>
          <div className="h-4"></div>
            <div className="border-stone-200 border shadow-xl rounded-[6px] px-16 py-8 bg-white">
              <TipTapEditor note={note} />
            </div>
      </div>
    </div>
  )
}

export default Notebookpage