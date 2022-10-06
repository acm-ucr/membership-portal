import React from "react";

const Navigation = () => {
  return (
    <div className="flow-root">
      <h3 className="float-left px-3 pt-3">member portal</h3>
      <div className="float-right space-x-10 text-acm-black px-3 pt-3">
        <h4 className="float-left rounded hover:shadow-lg">profile</h4>
        <h4 className="float-left rounded hover:shadow-lg">forms</h4>
        <h4 className="float-left rounded hover:shadow-lg">resources</h4>
        <h6 className="float-left rounded hover:shadow-lg border-solid border-2 border-black">
          general placeholder
        </h6>
      </div>
    </div>
  );
};

export default Navigation;
