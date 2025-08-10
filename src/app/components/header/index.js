"use client";
import Image from 'next/image'
import { FaBars } from "react-icons/fa";
import React, { useState } from 'react';


export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="bg-black/20 fixed w-full flex-row items-center justify-between ">
            <div className=" mx-auto px-4 sm:px-6 lg:px-20">
                <div className="flex justify-between items-center h-20">
                    <div className="flex flex-row items-center">
                        <Image src="/assets/header-icon.png" alt='.' width={30} height={30} className="mr-3" />
                        <h1 className="text-xl font-bold text-white">Shadient.co</h1>
                    </div>

                    {/* Mobile Menu */}
                    <FaBars size={26} color="white" className="cursor-pointer md:hidden" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    /> 
                     <div className={`${isMenuOpen ? 'absolute' : 'hidden'} top-16 right-0 w-full bg-black/20 backdrop-blur-lg p-4`}>
                        <nav className="flex flex-col space-y-2 ">
                            <a href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium w-full text-center">
                                Home
                            </a>
                            <a href="/company" className="text-white px-3 py-2 rounded-md text-sm font-medium w-full text-center">
                                Company
                            </a>
                            <a href="/service" className="text-white px-3 py-2 rounded-md text-sm font-medium w-full text-center">
                                Services
                            </a>
                            <button className="px-8 py-1 bg-transparent border border-[#FFA800] text-[#FFA800] font-semibold rounded-full 
                            hover:bg-[#FFA800] hover:text-gray-200 transition duration-500 cursor-pointer uppercase">
                                Contact
                            </button>
                        </nav>
                     </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-2">
                        <a href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                            Home
                        </a>
                        <a href="/company" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                            Company
                        </a>
                        <a href="/service" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                            Services
                        </a>
                        <button className="px-8 py-1 bg-transparent border border-[#FFA800] text-[#FFA800] font-semibold rounded-full 
                        hover:bg-[#FFA800] hover:text-gray-200 transition duration-500 cursor-pointer uppercase">
                            Contact
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    )
}