import React from 'react';
import { PiX } from 'react-icons/pi';

const Hero = () => {
  return (
    <div className="w-full py-7">
      <div className="w-full bg-slate-100 text-black flex flex-col items-center justify-center text-center py-2 mx-auto rounded-md shadow-md">
        <p className="text-lg font-bold">Hello Nike App</p>
        <p className="text-sm mt-2">
          Download the app to access everything Nike. 
          <span className="underline decoration-black font-medium"> Get Your Great</span>
        </p>
      </div>
    </div>         
  );
};

export default Hero;
