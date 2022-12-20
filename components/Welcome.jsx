import React from "react";

const Welcome = () => {
  return (
    <div>
      <p className="text-acm-black text-center font-bold xl:text-7xl l:text-6xl s:text-7xl text-5xl">
        welcome to
      </p>
      <div className="bg-acm-blue rounded-3xl text-acm-white font-bold xl:text-7xl l:text-6xl s:text-7xl text-5xl font-lexend p-3 my-4 flex justify-center items-center">
        <div className="flex justify-center items-center -mt-3">
          acm
          <div className="font-athiti font-semibold m-0 p-0">@</div>
          ucr
        </div>
      </div>
    </div>
  );
};

export default Welcome;
