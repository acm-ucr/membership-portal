import React from "react";
import Image from "next/image";

const Photo = ({ photo }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <Image src={photo} alt="image" width={500} height={500} />
    </div>
  );
};

export default Photo;
