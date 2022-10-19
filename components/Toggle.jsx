import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";

const Toggle = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const name = isAdmin ? "Admin" : "General";
    console.log(`You are currently ${name}`);
  });

  if (isAdmin) {
    return (
      <div
        onClick={() => {
          setIsAdmin(!isAdmin);
        }}
        className="flex h-1/3 justify-center items-center rounded-full border-solid border-2 border-acm-black bg-acm-black text-white p-2"
      >
        <div className="flex justify-center items-center">
          <FaCircle className="text-acm-white mx-1" />
          <p className="inline m-0 p-0 mx-1">admin</p>
        </div>
      </div>
    );
  } else {
    return (
      <div
        onClick={() => {
          setIsAdmin(!isAdmin);
        }}
        className="flex h-1/3 justify-center items-center rounded-full border-solid border-2 border-acm-black text-acm-black p-2"
      >
        <div className="flex justify-center items-center">
          <FaCircle className="text-acm-black mx-1" />
          <p className="inline m-0 p-0 mx-1">general</p>
        </div>
      </div>
    );
  }
};

export default Toggle;
