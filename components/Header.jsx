import React from "react";

const Header = ({ title, color }) => {
  return (
    <div
      className={`w-11/12 p-2 font-lexend font-semibold rounded-3 text-2xl ${color}  text-acm-white`}
    >
      {title}
    </div>
  );
};
export default Header;
