import React from 'react';
import { IoIosSearch } from "react-icons/io";
import Image from 'next/image';

const ContactUs = () => {
  return (
    <div className="w-full bg-slate-100 text-black flex flex-col items-center justify-center text-center py-6 px-4 mx-auto rounded-md shadow-md max-w-screen-xl lg:py-12 lg:px-8">
      <h1 className="text-2xl hover:text-blue-500">GET HELP</h1>
      <button className="bg-slate-100 text-gray-500 border border-gray-300 flex items-center px-4 py-2 rounded-md">
        What can we help you with? <IoIosSearch />
      </button>
      
      {/* Image section */}
      <div className='grid grid-cols-2 gap-4 mt-6'>
        <div className="p-2">
          <Image
            src="/images/contact4.png"
            alt='Image 1'
            width={1000}
            height={1000}
            layout="responsive"
          />
        </div>
        <div className="p-2">
          <Image
            src="/images/contact5.png"
            alt='Image 2'
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
