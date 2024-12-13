import React from 'react';
import Image from 'next/image';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Sale = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Header Section */}
      <div className="flex flex-wrap items-center gap-4">
        <h1 className="text-black text-xl md:text-2xl">Best of Air Max</h1>
        <div className="flex items-center gap-6 ml-auto">
          <p className="flex items-center">Shop</p>
          <button
            className="bg-gray-300 text-black font-bold py-2 px-4 rounded-full"
            title="Previous Page"
          >
            <FaAngleLeft />
          </button>
          <button
            className="bg-gray-300 text-black font-bold py-2 px-4 rounded-full"
            title="Next Page"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <Image
          src="/images/shoes1.png"
          alt="Shoe 1"
          width={300}
          height={300}
          className="rounded-md shadow-md"
        />
        <Image
          src="/images/shoes2.png"
          alt="Shoe 2"
          width={300}
          height={300}
          className="rounded-md shadow-md"
        />
        <Image
          src="/images/shoes3.png"
          alt="Shoe 3"
          width={300}
          height={300}
          className="rounded-md shadow-md"
        />
      </div>

      {/* Text Section */}
      <div className="w-full flex flex-col items-center text-center py-7">
        <h1 className="bg-slate-100 text-black text-2xl md:text-3xl mt-2 py-2 mx-auto rounded-md shadow-md">
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className="text-sm md:text-base">
          Cause everyone should know the feeling of running in that perfect pair.
        </p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <button className="bg-black text-white font-bold py-2 px-6 rounded-lg">
            Find Your Shoe
          </button>
        </div>
      </div>

      {/* Featured Section */}
      <div className="w-full flex flex-col items-center text-center py-7">
        <h1 className="text-2xl md:text-3xl text-black">Featured</h1>
        <Image
          src="/images/men.png"
          alt="Men"
          width={1000}
          height={1000}
          className="rounded-lg"
        />
      </div>

      {/* Footer Section */}
      <div className="text-center py-7">
        <h1 className="text-2xl md:text-3xl text-black">FLIGHT ESSENTIALS</h1>
        <p className="text-sm md:text-base">
          Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
        </p>
        <button className="bg-black text-white py-2 px-6 rounded-md mt-4">
          Shop
        </button>
      </div>
    </div>
  );
};

export default Sale;
