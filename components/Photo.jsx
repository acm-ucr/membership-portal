import React from "react";
// import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";

const Photo = ({ uid, photoURL }) => {
  console.log(photoURL);
  return (
    <div className="w-full flex justify-center items-center">
      {/* <Image src={photoURL} width={300} height={300} alt="profile" /> */}
      <QRCodeSVG value={uid} size={300} />
    </div>
  );
};

export default Photo;
