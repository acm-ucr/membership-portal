import React from "react";
import Image from 'next/image'

const Welcome = () => {
  return (
  <div className="flex flex-col justify-center items-center">
    <h1>Welcome to</h1>
    <Image className="bg-[#86AFF9] rounded-md py-8 w-auto h-36" src="/acmucr.png" alt="ACM @ UCR" width={681}
        height={134}/>
  </div>);
};

export default Welcome;
