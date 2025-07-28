import { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import ScrollDown from "./ScrollDown";

const newsItems = [
    "WCE ACM Student Chapter wins Best Chapter Award",
    "Upcoming Hackathon: Register now!",
    "New AI workshop series starting next month",
    "WCE ACM members present at international conference"
]

export default function Hero() {


    return (
        <div data-aos='zoom-out' className="min-h-screen w-[80%] mx-auto flex flex-col justify-center items-center gap-6">
            <div className="flex flex-1 flex-col w-full sm:w-2/3 items-center justify-center gap-2">
                <div className="w-full mt-16 sm:w-3/4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 rounded-full p-[2px] mb-3">
                    <div className="rounded-full">
                        <div className="flex items-center py-1 px-3 gap-2">
                            <span className="text-base italic font-semibold text-white whitespace-nowrap">
                                NEWS
                            </span>
                            <div className="overflow-hidden whitespace-nowrap w-full py-2 relative">
                                <marquee scrollamount="4" direction="left" className="text-white text-sm">
                                    {newsItems.map((item, index) => (
                                        <span key={index} className="mr-10 px-2">{item}</span>
                                    ))}
                                </marquee>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="whitespace-nowrap overflow-hidden text-[4.5rem] sm:text-[8rem] leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4d4d4d] via-[#ffffff] to-[#919191]">
                    WCE ACM
                </h1>
                <h2 className="w-max text-[2rem] sm:text-[3.5rem] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#8f8f8f] to-[#ffffff] flex gap-[0.75rem] sm:gap-[1rem] justify-center">
                    <span>STUDENT</span>
                    <span>CHAPTER</span>
                </h2>
                <div className="w-full sm:w-[80%] py-4 font-style: italic text-[16px] sm:text-[18px] text-center text-white font-light leading-tight">
                Fostering innovation and excellence in computing. Join us for hands-on workshops, exciting hackathons, and valuable networking opportunities to elevate your skills and connect with a global tech community!
                </div>
                <div className="flex flex-row justify-center items-center gap-4 w-full">
                <Link to="/events" className="w-full max-w-56">
                    <button type="button" className="bg-gradient-to-r from-blue-600 to-blue-400 text-black hover:from-blue-700 hover:to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-md sm:text-lg px-7 py-2 text-center w-full max-w-56">
                        Events
                    </button>
                </Link>


                <a href="#aboutUs" className="w-full max-w-56">
                    <button type="button" className="text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-md sm:text-lg px-7 py-2 text-center w-full max-w-56">
                        About
                    </button>
                </a>

                </div>
                <div className="flex justify-center mt-6 gap-4">
                    <a href="mailto:wceacmsc@gmail.com" className="p-2 bg-zinc-200 rounded-full transition-all duration-200 hover:bg-sky-300" target="_blank" rel="noopener noreferrer">
                        <IoMail size={21} className="text-black" />
                    </a>

                    <a href="https://www.linkedin.com/company/wce-acm-student-chapter/mycompany/" className="p-2 bg-zinc-200 rounded-full transition-all duration-200 hover:bg-sky-300" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn size={21} className="text-black" />
                    </a>

                    <a href="https://www.instagram.com/wce_acm/" className="p-2 bg-zinc-200 rounded-full transition-all duration-200 hover:bg-sky-300" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={21} className="text-black" />
                    </a>

                    <a href="https://www.facebook.com/wceacm/" className="p-2 bg-zinc-200 rounded-full transition-all duration-200 hover:bg-sky-300" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF size={21} className="text-black" />
                    </a>

                    <a href="https://www.youtube.com/@wceacm" className="p-2 bg-zinc-200 rounded-full transition-all duration-200 hover:bg-sky-300" target="_blank" rel="noopener noreferrer">
                        <FaYoutube size={21} className="text-black" />
                    </a>

                    <a href="https://x.com/wce_acm" className="p-2 bg-zinc-200 rounded-full transition-all duration-200 hover:bg-sky-300" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter size={21} className="text-black" />
                    </a>
                </div>
            </div>
            <ScrollDown />
            {/* <div className="flex items-center justify-center flex-grow">
                <div                    className="flex items-center justify-center">
                    <img className="w-[85%]" src="/logo.png" alt="logo" />
                </div>
            </div> */}
        </div>
    )
}