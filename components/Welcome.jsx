import React from "react";
import Image from "next/image";

const Welcome = () => {
  return (
    <div className="relative border-[0px] sm:border-8 border-acm-blue rounded-t-[25px] sm:rounded-l-[50px] sm:rounded-r-[0px] max-w-[50%] sm:max-w-screen">
      <Image
        className="z-0 absolute inset-0"
        src="/burst.svg"
        alt="background"
        width={500}
        height={500}
      />
      <div className="-top-4 sm:-top-9 flex items-center justify-center z-10 absolute inset-0 h-full w-full">
        <p className=" text-acm-black text-center font-bold sm:text-5xl text-2xl m-0 p-0">
          welcome to
        </p>
      </div>
      <div className="top-4 sm:top-9 flex items-center justify-center z-10 absolute h-full w-full m-0 p-0 lg:text-6xl sm:text-5xl text-xl">
        <div className="hidden sm:flex absolute bg-acm-blue rounded-3xl text-acm-white font-bold text-xl sm:text-5xl font-lexend p-3 justify-center items-center">
          acm<p className="font-athiti p-0 m-0">@</p>ucr
        </div>
        <div className="flex sm:hidden absolute bg-acm-blue rounded-3xl text-acm-white font-bold text-xl sm:text-5xl font-lexend py-1 px-2 justify-center items-center">
          acm<p className="font-athiti p-0 m-0">@</p>ucr
        </div>
      </div>
    </div>
  );
};

export default Welcome;
