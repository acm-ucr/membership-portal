import React from "react";

const Frame = ({ image, bottomLeft, topRight, corners }) => {
  return (
    <div
      className="p-4 w-fit h-fit"
      style={{
        backgroundImage: `conic-gradient(${topRight} 90deg, ${corners} 90deg, ${corners} 180deg, ${bottomLeft} 180deg, ${bottomLeft} 270deg, ${corners} 0deg)`,
      }}
    >
      <img src={image} alt="Square image" />
    </div>
  );
};

export default Frame;
