import CreateNote from '@/components/CreateNote'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { UserButton } from '@clerk/nextjs'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="min-h-screen">
        <div className="max-w-7xl mx-auto p-4">
            <div className="h-14"></div>
            <div className="flex justify-center items-center md:flex-row flex-col">
                <div className='flex justify-between items-center'>
                    <Link href='/'>
                        <Button size="sm" className="hover:scale-110 transition ease-in-out delay-75 bg-[#d34848] text-white font-semibold rounded-[8px] hover:bg-white hover:text-[#222831] duration-200 p-2">
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
                <div className="h-8"></div>
                <div className="h-8"></div>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    <CreateNote />
                </div>
        </div>
    </div>
  )
}

export default page