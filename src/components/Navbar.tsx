
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
<nav className="bg-[#393E46] rounded-[10px] top-6 mx-2 shadow-inner mt-2">
  <div className="max-w-6xl mx-auto px-2">
    <div className="flex justify-between">

      <div className="flex space-x-4">
        <div>
          <Link href="/" className="flex items-center py-5 px-2 text-[#EEEEEE]">
            <span className="font-bold text-lg">Pro Note</span>
          </Link>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-1 font-semibold">
        <Link href="/sign-in">
          <Button className="hover:scale-110 transition ease-in-out delay-75 bg-[#BC6FF1] text-white font-semibold rounded-[8px] hover:bg-white hover:text-[#892CDC] duration-200 p-3">
          Sign-In
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button className="ml-3 hover:scale-110 transition ease-in-out delay-75 bg-[#BC6FF1] text-white font-semibold rounded-[8px] hover:bg-white hover:text-[#892CDC] duration-200 p-3">
          Sign-Up
          </Button>
        </Link>
      </div>

    </div>
  </div>
</nav>
  )
}

export default Navbar