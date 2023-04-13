// import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";

const Photo = ({ uid }) => {
  return (
    <div className="w-full flex justify-center items-center">
      {/* <Image src={photoURL} width={300} height={300} alt="profile" /> */}
      <QRCodeSVG value={uid} size={300} />
    </div>
  );
};

export default Photo;
