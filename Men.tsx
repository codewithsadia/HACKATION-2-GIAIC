import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="w-full flex items-center justify-center p-4">
      <div className="max-w-screen-md w-full">
        <Image
          src="/images/shoes.png"
          alt="Shoes"
          layout="responsive"
          width={1000}
          height={1000}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Page;
