import CreateNote from '@/components/CreateNote'
import { Button } from '@/components/ui/button'
import { db } from '@/lib/db'
import { $notes } from '@/lib/db/schema'
import { UserButton, auth } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

type Props = {}

const page = async (props: Props) => {
    // fetching the notes table then traversing it with note(index) to render respective note cards.
    const {userId} = auth()
    const notes = await db.select().from($notes).where(eq($notes.userId, userId!))

  return (
    <div className="min-h-screen">
        <div className="max-w-7xl mx-auto p-4">
            <div className="h-14"></div>
            <div className="flex justify-center items-center md:flex-row flex-col">
                <div className='flex justify-between items-center'>
                    <Link href='/'>
                        <Button size="sm" className="hover:scale-110 transition ease-in-out delay-75 bg-[#bd0e32] text-white font-semibold rounded-[8px] hover:bg-white hover:text-[#222831] duration-200 p-2">
                            <ArrowLeft className="mr-2 w-5 h-5"/>
                            Back
                        </Button>
                    </Link>
                    <div className="w-6"></div>
                    <h1 className="text-3xl text-white font-bold">My Notes</h1>
                    <div className="w-6"></div>
                    <UserButton />
                </div>
            </div>
                <div className="h-16"></div>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    <CreateNote />
                    {notes.map(note => {
                        return (
                            <a href={`/notebook/${note.id}`} key={note.id}>
                                <div className="border-dashed border-2 rounded-xl border-[#bd0e32] overflow-hidden flex flex-col hover:shadow-cl transition hover:-translate-y-1">
                                    <Image priority width={300} height={200} alt={note.name} src={note.imageUrl || ""} className="p-4 rounded-[25px] " />
                                    <div className='p-6'>
                                        <h3 className="text-xl font-semibold text-white">
                                            {note.name}
                                        </h3>
                                        <div className="h-1">
                                            <p className='text-sm text-white'>
                                                {new Date(note.createdAt).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </div>
        </div>
    </div>
  )
}

export default page