import React from "react";
import { QRCodeSVG } from "qrcode.react";

const Photo = ({ email }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <QRCodeSVG value={email} size={300} />
    </div>
  );
};

export default Photo;
