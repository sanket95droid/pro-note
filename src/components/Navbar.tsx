
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
<nav className="bg-[#ede4d3] rounded-[10px] top-6 mx-2 shadow-inner mt-2">
  <div className="max-w-6xl mx-auto px-2">
    <div className="flex justify-between">

      <div className="flex space-x-4">
        <div>
          <Link href="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
            <span className="font-bold text-lg">Pro Note</span>
          </Link>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-1 font-semibold">
        <Link href="/sign-in">
          <Button className="bg-[#ffd299] text-[#8f1e00] font-semibold hover:animate-pulse rounded-[8px] hover:bg-[#2c2c2c] hover:text-white duration-400 p-3">
          Sign-In
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button className="ml-3 bg-[#ffd299] text-[#8f1e00] font-semibold hover:animate-pulse rounded-[8px] hover:bg-[#2c2c2c] hover:text-white duration-400 p-3">
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