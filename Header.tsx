"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { PiToolboxDuotone } from "react-icons/pi";

const Header = () => {
  return (
    <div className="text-black bg-slate-100">
      {/* Top Section */}
      <div className="flex justify-between items-center h-10 w-full px-4 py-2">
        {/* Logo Section */}
        <div className="flex items-center p-4">
          <Image
            src="/images/Vector.png"
            alt="Logo"
            width={20}
            height={20}
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <p className="text-sm text-black">Find a store</p>
          <span className="border-l border-gray-500 h-5"></span>
          <p className="text-sm text-black">Help</p>
          <span className="border-l border-gray-500 h-5"></span>
          <p className="text-sm text-black">Join Us</p>
          <span className="border-l border-gray-500 h-5"></span>
          <p className="text-sm text-black">Sign In</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center bg-white h-10 w-full px-4 py-9">
        {/* Logo Section */}
        <div className="flex items-center p-4">
          <Image
            src="/images/Vector (3).png"
            alt="Secondary Logo"
            width={60}
            height={60}
          />
        </div>

        {/* Navigation Section */}
        <nav className="flex justify-center text-black font">
          <Link href="/new-featured" className="px-4 hover:text-gray-900">
            New & Featured
          </Link>
          <Link href="/men" className="px-4 text-bold hover:text-gray-900">
            Men
          </Link>
          <Link href="/women" className="px-4 hover:text-gray-900">
            Women
          </Link>
          <Link href="/kids" className="px-4 hover:text-gray-900">
            Kids
          </Link>
          <Link href="/sale" className="px-4 hover:text-gray-900">
            Sale
          </Link>
          <Link href="/snkrs" className="px-4 hover:text-gray-900">
            SNKRS
          </Link>
        </nav>

        {/* Icons Section */}
        <div className="flex items-center gap-4">
          <button
            className="bg-slate-100 text-black-50 p-4 flex items-center gap-2 px-2 py-0 border border-gray-300 rounded-md hover:bg-gray-200"
            aria-label="Search"
          >
            <IoIosSearch />
            Search
          </button>
          <a href="#" aria-label="Favorites" className="text-black hover:text-gray-600">
            <FaRegHeart />
          </a>
          <a href="#" aria-label="Toolbox" className="text-black hover:text-gray-600">
            <PiToolboxDuotone />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
