import React from 'react'
import Logo from "../assets/logo.png"
import { Briefcase, Search } from "lucide-react"
const Navbar = () => {
    return (
        <>
            <section className='fixed z-50 bg-white w-full flex justify-between items-center p-3 px-11 border-b border-gray-300 '>
                <div className='pl-44'><img src={Logo} alt="logo" className='w-11 h-11' /></div>
                <div className="relative w-full max-w-xl">
                    <Search
                        size={20}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-black"
                    />

                    <input
                        type="search"
                        placeholder="Search Opportunities"
                        className="w-full pl-12 pr-4 h-10 rounded-4xl border border-gray-300 
                   bg-white font-normal
                   focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400
                   transition-all duration-200"
                    />
                </div>
                <div>
                    <button
                        className="flex items-center gap-2 
               px-6 h-10 
               border border-blue-400 
               bg-blue-50 
               color
               rounded-full 
               hover:bg-blue-100 
               transition-all duration-200 cursor-pointer"
                    >
                        <Briefcase size={18} />
                        <span>
                            For <span className="font-semibold">Business</span>
                        </span>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Navbar
