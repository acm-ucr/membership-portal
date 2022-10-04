import React from "react";
import Image from "next/image";

const Welcome = () => {
  return (
    <div>
      <h1 className="text-[#0F121A] text-center font-bold xl:text-7xl l:text-6xl s:text-7xl text-5xl">
        Welcome to
      </h1>
      <div className="bg-[#86AFF9] rounded-3xl w-10/12 min-w-[300px] max-w-[450px] mx-auto my-3 px-6">
        <Image
          layout="responsive"
          src="/acmucr.png"
          alt="ACM @ UCR"
          width={681}
          height={134}
        />
      </div>
    </div>
  );
};

export default Welcome;
