import { NotebookPen } from 'lucide-react';
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
<nav className="bg-transparent border-b-slate-700 border-b-[1px]">
  <div className="max-w-5xl ml-4 px-2">
  <div className="flex justify-between">
      <div className="flex mr-20 flex-row items-center justify-evenly space-x-4">
        <Link href="/" className="flex items-center py-3 px-2 text-[#EEEEEE]">
        <NotebookPen />
          <span className="font-bold text-lg ml-1">Pro Note</span>
        </Link>
      </div>


      <div className="flex absolute right-2 top-[6px] items-center space-x-1 font-semibold">
        <Link href="/sign-in">
          <Button className=" transition ease-in-out delay-75 bg-[#222831] text-white font-semibold rounded-[8px] hover:bg-white hover:text-[#892CDC] duration-300 px-3">
          Sign-In
          </Button>
        </Link>
        &nbsp;
        <Link href="/sign-up">
          <Button className="transition ease-in-out delay-75 bg-[#222831] text-white font-semibold rounded-[8px] hover:bg-white hover:text-[#892CDC] duration-300 px-3">
          Sign-Up
          </Button>
        </Link>
        &nbsp;
        <Link href="/about">
          <Button className="transition ease-in-out delay-75 bg-[#222831] text-white font-semibold rounded-[8px] hover:bg-white hover:text-[#892CDC] duration-300 px-3">
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