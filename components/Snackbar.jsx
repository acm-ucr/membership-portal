import React from "react";

const Snackbar = ({ visible, setVisible, message }) => {
  return (
    <div
      className={`${
        visible ? "block" : "hidden"
      } flex justify-between items-center fixed top-1/2 w-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl bg-[#3E086D] p-3 rounded-2xl text-white font-pixel border-white border-8 z-[99999999]`}
    >
      {message}
      <button
        onClick={() => setVisible(false)}
        className="font-pixel p-0 m-0 hover:text-red-500"
      >
        X
      </button>
    </div>
  );
};

export default Snackbar;
