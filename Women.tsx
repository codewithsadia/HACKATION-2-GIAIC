import React from "react";

const Women = () => {
  return (
    <div className="w-full py-7 px-4">
      {/* Main Section */}
      <div className="w-full bg-slate-100 text-black flex flex-col items-center justify-center text-center py-6 px-4 mx-auto rounded-md shadow-md max-w-screen-xl lg:py-12 lg:px-8">
        <p className="text-lg font-medium sm:text-xl">First Look</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl mt-2 font-bold">
          NIKE AIR MAX PULSE
        </h1>
        <p className="text-base sm:text-lg mt-4 font-medium">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
        </p>
        <p className="text-base sm:text-lg mt-2">
          —designed to push you past your limits and help you go to the max.
        </p>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <button className="bg-black text-white font-bold py-2 px-6 rounded-lg w-full sm:w-auto">
            Notify Me
          </button>
          <button className="bg-black text-white font-bold py-2 px-6 rounded-lg w-full sm:w-auto">
            Shop Air Max
          </button>
        </div>
      </div>
    </div>
  );
};

export default Women;
