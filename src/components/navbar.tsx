"use client"; // Mark this file as a client-side component

import React, { useState } from "react";
import { Ojuju } from "next/font/google";
import Link from "next/link";

const ojuju = Ojuju({
  subsets: ['latin'],
  weight: '800',
  display: 'swap',
});



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu


  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <nav className="mx-auto max-w-screen-lg backdrop-blur-md shadow-md flex justify-between items-center h-14 px-6 mt-4 bg-gray-950 rounded-[80px] text-white relative">
          {/* Scroll Progress Bar inside Navbar */}
        

          {/* Logo */}
          <div className={`text-[25px] tracking-wide font-semibold ${ojuju.className}`}>TOKO MISTERI</div>

          {/* Search Bar */}
          <div className="hidden md:block">
            <div className="relative">
              <input
                type="text"
                className="block w-42 px-9 py-2 text-sm border-[1.5px] bg-transparent border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Discover"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm8 0l4 4"
                />
              </svg>
            </div>
          </div>
          

          {/* Burger Button */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="w-6 h-6 cursor-pointer flex flex-col justify-between items-center"
          >
            <div
              className={`w-full h-0.5 bg-white rounded-sm transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1" : ""
              }`}
            ></div>
            <div
              className={`w-full h-0.5 bg-white rounded-sm transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`w-full h-0.5 bg-white rounded-sm transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            ></div>
          </div>
        </nav>
      </div>

      {/* Menu (Slides in from the right side) */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray-950 text-white flex flex-col justify-center items-start z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Items */}
        <ul className="space-y-6 text-left text-xl font-semibold px-6">
          <li>
            <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Login
            </button>
          </li>
          <li>
            <button className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              Register
            </button>
          </li>
          <Link href="/dashboard">Go to Dashboard</Link>
          <li className="cursor-pointer hover:text-gray-400">About</li>
          <li className="cursor-pointer hover:text-gray-400">Services</li>
          <li className="cursor-pointer hover:text-gray-400">Contact</li>
        </ul>
      </div>
    </>
  );
}
