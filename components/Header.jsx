import React from "react";

const Header = ({ title, color ="acm-black"}) => {
  return (
    <div className= {`w-11/12 p-2 font-lexend font-semibold rounded-3 text-2xl text-acm-white bg-${color}`}>
      {title}
    </div>
  );
};

export default Header;
