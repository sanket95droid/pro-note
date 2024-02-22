import { NotebookPen } from 'lucide-react';
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
<nav className="bg-transparent border-b-[#121212] border-b-[1px] mx-4 mt-4">
  <div className="max-w-5xl ml-3 px-2">
  <div className="flex justify-between">
      <div className="flex flex-row items-center justify-evenly space-x-4">
        <Link href="/" className="flex items-center py-2 px-2 text-[#EEEEEE]">
        <NotebookPen className='text-[#bd0e32] bg-white rounded-full p-[3px]' />
          <span className="font-bold text-lg ml-2">Pro Note</span>
        </Link>

      </div>

      <div className="flex absolute right-4 top-[16px] items-center space-x-1 font-semibold">
        <Link href="/sign-in">
          <Button className=" transition ease-in-out delay-75 text-white font-semibold rounded-[8px] hover:bg-white hover:text-[#bd0e32] duration-300 px-3">
          Sign-In
          </Button>
        </Link>
        &nbsp;
        <Link href="/sign-up">
          <Button className="transition ease-in-out delay-75 text-white font-semibold rounded-[8px] hover:bg-white hover:text-[#bd0e32] duration-300 px-3">
          Sign-Up
          </Button>
        </Link>
        &nbsp;
        <Link href="/about">
          <Button className="transition ease-in-out delay-75 text-white font-semibold rounded-[8px] hover:bg-white hover:text-[#bd0e32] duration-300 px-3">
          About
          </Button>
        </Link>
      </div>

    </div>
  </div>
</nav>
  )
}

export default Navbar