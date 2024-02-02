import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="min-h-screen">
        <div className="max-w-7xl mx-auto p-20">
            <div className="h-14"></div>
            <div className="flex justify-center items-center md:flex-row flex-col">
                <div className='flex justify-between items-center'>
                    <Link href='/'>
                        <Button className="hover:scale-110 transition ease-in-out delay-75 bg-[#BC6FF1] text-white font-semibold rounded-[8px] hover:bg-white hover:text-[#222831] duration-200 p-3">
                            <ArrowLeft className="mr-2 w-5 h-5"/>
                            Back
                        </Button>
                    </Link>
                    <div className="w-6"></div>
                    <h1 className="text-3xl text-white font-bold">My Notes</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page