import Navbar from "@/components/Navbar";
import TypeWriterTitle from "@/components/TypeWriterTitle";
import { Button } from "@/components/ui/button";
import { ArrowRight, CircleDollarSign } from "lucide-react";
import Link from "next/link";
import Image from 'next/image'
import image from "../../public/landing.jpg"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Navbar />
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 items-center text-center">
        <h1 className="font-bold text-4xl text-center text-white">
          Smarter <span className="text-[#d34848]">notes</span>, brighter ideas - powered by AI ingenuity
        </h1>
        <div className="flex justify-center">
          <h2 className="mt-4 rounded-[6px] font-semibold text-xl text-center text-[#233142] w-fit bg-white items-center p-2">
            <TypeWriterTitle />
          </h2>
        </div>
        <div className="mt-10"></div>
        <div className="flex justify-center">
          <Link href="/dashboard">
            <Button className="hover:scale-110 transition ease-in-out delay-75 hover:drop-shadow-glow bg-[#d34848] text-white font-semibold rounded-[8px] hover:bg-white hover:text-[#222831] duration-200 p-3">Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          &nbsp;
          &nbsp;
          <Link href="/pricing">
            <Button className="hover:scale-110 transition ease-in-out delay-75 hover:drop-shadow-glow bg-[#d34848] text-white font-semibold rounded-[8px] hover:bg-white hover:text-[#222831] duration-200 p-3">Pricing
            <CircleDollarSign className="ml-2 w-5 h-5 animate-spin" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center translate-y-2/3">
        <Image src={image} className="mt-2 rounded-[10px] w-[750px] h-[500px] shadow-xl shadow-white" alt="application"/>
      </div>
    </div>
    );
}
