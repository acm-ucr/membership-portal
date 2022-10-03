import React from "react";
import Image from "next/image";

const Welcome = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[#0F121A] font-bold xl:text-8xl md:text-6xl sm:text-5xl text-2xl">
        Welcome to
      </h1>
      <Image
        className="bg-[#86AFF9] rounded-3xl"
        src="/acmucr.png"
        alt="ACM @ UCR"
        width={681}
        height={134}
      />
    </div>
  );
};

export default Welcome;
