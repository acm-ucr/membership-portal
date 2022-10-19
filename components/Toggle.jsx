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
      <h6
        onClick={() => {
          setIsAdmin(!isAdmin);
        }}
        className="flex float-right rounded-full border-solid border-2 border-black pb-0 px-1 mt-3 bg-black text-white"
      >
        admin.
        <FaCircle className="ml-1.5 mt-0.5" />
      </h6>
    );
  } else {
    return (
      <h6
        onClick={() => {
          setIsAdmin(!isAdmin);
        }}
        className="flex float-right rounded-full border-solid border-2 border-black pb-0 px-1 mt-3"
      >
        <FaCircle className="text-black mt-0.5 mr-1" />
        general
      </h6>
    );
  }
};

export default Toggle;
