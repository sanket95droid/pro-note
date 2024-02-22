import Navbar from '@/components/Navbar';
import React from 'react';
import { Button } from "@/components/ui/button";
import Image from 'next/image'
import imageAsset from '../../../public/shapes.svg'


const PricingPage = () => {
    return (
        <div className="h-screen overflow-hidden">
            <div className="absolute -z-10 w-screen h-screen">
                <Image
                    src={imageAsset}
                    alt="bg"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                
            </div>
            <Navbar />
            <div className="absolute flex justify-center items-center -translate-y-1/2 max-[950px]:-translate-y-[20%] -translate-x-1/2 left-1/2 top-1/2">
                <div className="grid max-[950px]:grid-cols-1 max-[1200px]:gap-32 max-[950px]:gap-8 grid-cols-3 gap-8">
                    <div className="hover:scale-110 p-8 text-center justify-self-center duration-200 bg-[#ffffff]/5 border-white/[.05] hover:bg-[#ffffff]/10 outline-1 shadow-xl backdrop:blur-md rounded-xl">
                        <h2 className="text-4xl text-white font-bold">$7</h2>
                        <p className="text-white text-[22px]">Basic Plan</p>
                        <ul className="mt-4 text-white/75">
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                        </ul>
                        <Button className="mt-2 hover:scale-110 transition ease-in-out delay-75 hover:drop-shadow-glow bg-[#bd0e32] text-white font-semibold rounded-[8px] hover:bg-white hover:text-[#222831] duration-200 p-3">Choose Plan</Button>
                    </div>
                    <div className="hover:scale-110 p-8 text-center justify-self-center duration-200 bg-[#ffffff]/5 border-white/[.05] hover:bg-[#ffffff]/10 outline-1 shadow-xl backdrop:blur-md rounded-xl">
                        <h2 className="text-4xl text-white font-bold">$29</h2>
                        <p className="text-white text-[22px]">Standard Plan</p>
                        <ul className="mt-4 text-white/75">
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            <li>Feature 4</li>
                        </ul>
                        <Button className="mt-2 hover:scale-110 transition ease-in-out delay-75 hover:drop-shadow-glow bg-[#bd0e32] text-white font-semibold rounded-[8px] hover:bg-white hover:text-[#222831] duration-200 p-3">Choose Plan</Button>
                    </div>
                    <div className="hover:scale-110 p-8 text-center justify-self-center duration-200 bg-[#ffffff]/5 border-white/[.05] hover:bg-[#ffffff]/10 outline-1 shadow-xl backdrop:blur-md rounded-xl">
                        <h2 className="text-4xl text-white font-bold">$79</h2>
                        <p className="text-white text-[22px]">Premium Plan</p>
                        <ul className="mt-4 text-white/75">
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            <li>Feature 4</li>
                            <li>Feature 5</li>
                        </ul>
                        <Button className="mt-2 hover:scale-110 transition ease-in-out delay-75 hover:drop-shadow-glow bg-[#bd0e32] text-white font-semibold rounded-[8px] hover:bg-white hover:text-[#222831] duration-200 p-3">Choose Plan</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPage;
