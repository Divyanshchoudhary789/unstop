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
import React from 'react'
import Logo from "../assets/logo.png"
import { Briefcase, Search } from "lucide-react"

const Navbar = () => {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');

                .navbar-root {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 50;
                    height: 64px;
                    background: rgba(255, 255, 255, 0.72);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border-bottom: 1px solid rgba(148, 163, 255, 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 28px 0 240px;
                    gap: 20px;
                    font-family: 'DM Sans', sans-serif;
                }

                /* subtle top gradient line */
                .navbar-root::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #818cf8, #38bdf8, #c084fc, #818cf8);
                    background-size: 200% 100%;
                    animation: shimmer 4s linear infinite;
                }
                @keyframes shimmer {
                    0%   { background-position: 0% 0%; }
                    100% { background-position: 200% 0%; }
                }

                /* LOGO */
                .navbar-logo img {
                    width: 40px;
                    height: 40px;
                    object-fit: contain;
                    display: block;
                }

                /* SEARCH */
                .search-wrap {
                    position: relative;
                    flex: 1;
                    max-width: 480px;
                }
                .search-wrap svg {
                    position: absolute;
                    left: 14px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #94a3b8;
                    pointer-events: none;
                    transition: color 0.2s;
                }
                .search-wrap:focus-within svg {
                    color: #6366f1;
                }
                .search-input {
                    width: 100%;
                    height: 40px;
                    padding: 0 16px 0 42px;
                    border-radius: 999px;
                    border: 1.5px solid rgba(148, 163, 255, 0.3);
                    background: rgba(240, 244, 255, 0.7);
                    font-family: 'DM Sans', sans-serif;
                    font-size: 14px;
                    color: #1e1b4b;
                    outline: none;
                    transition: all 0.2s ease;
                }
                .search-input::placeholder {
                    color: #94a3b8;
                    font-weight: 300;
                }
                .search-input:focus {
                    border-color: rgba(99, 102, 241, 0.5);
                    background: rgba(255, 255, 255, 0.9);
                    box-shadow: 0 0 0 4px rgba(129, 140, 248, 0.12);
                }

                /* BUTTON */
                .biz-btn {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 0 20px;
                    height: 40px;
                    border-radius: 999px;
                    border: 1.5px solid rgba(129, 140, 248, 0.35);
                    background: linear-gradient(120deg, rgba(129,140,248,0.10), rgba(56,189,248,0.08));
                    color: #4f46e5;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 14px;
                    font-weight: 400;
                    cursor: pointer;
                    white-space: nowrap;
                    transition: all 0.2s ease;
                    position: relative;
                    overflow: hidden;
                }
                .biz-btn::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(120deg, rgba(129,140,248,0.15), rgba(56,189,248,0.12));
                    opacity: 0;
                    transition: opacity 0.2s;
                    border-radius: inherit;
                }
                .biz-btn:hover::before { opacity: 1; }
                .biz-btn:hover {
                    border-color: rgba(99,102,241,0.55);
                    box-shadow: 0 4px 14px rgba(129,140,248,0.22);
                    transform: translateY(-1px);
                }
                .biz-btn:active { transform: translateY(0); }
                .biz-btn .biz-icon {
                    width: 28px;
                    height: 28px;
                    border-radius: 8px;
                    background: linear-gradient(135deg, #818cf8, #38bdf8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    flex-shrink: 0;
                    position: relative;
                    z-index: 1;
                }
                .biz-btn span { position: relative; z-index: 1; }
                .biz-btn .bold { font-weight: 600; }
            `}</style>

            <nav className="navbar-root">
                {/* LOGO */}
                <div className="navbar-logo">
                    <img src={Logo} alt="logo" />
                </div>

                {/* SEARCH */}
                <div className="search-wrap">
                    <Search size={17} />
                    <input
                        type="search"
                        placeholder="Search opportunities..."
                        className="search-input"
                    />
                </div>

                {/* CTA */}
                <button className="biz-btn">
                    <span className="biz-icon">
                        <Briefcase size={14} />
                    </span>
                    <span>For <span className="bold">Business</span></span>
                </button>
            </nav>
        </>
    )
}

export default Navbar
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
