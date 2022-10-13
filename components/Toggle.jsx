import { useEffect, useState } from "react";

const Toggle = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const name = isAdmin ? "Admin" : "General";
    console.log(`You are currently ${name}`);
  });

  // ToggleButton is used to update the state variable `isAdmin`, which updates the icon displayed
  return (
    <div>
      {isAdmin ? (
        <h6
          onClick={() => {
            setIsAdmin(!isAdmin);
          }}
          className="flex float-right rounded-full border-solid border-2 border-black pb-1 px-1 bg-black text-white"
        >
          admin.
          <div className="bg-white rounded-full ml-2 mt-[3px] h-4 w-4"></div>
        </h6>
      ) : (
        <h6
          onClick={() => {
            setIsAdmin(!isAdmin);
          }}
          className="flex float-right rounded-full border-solid border-2 border-black pb-1 px-1"
        >
          <div className="bg-black rounded-full mr-2 mt-[3px] h-4 w-4"></div>
          general
        </h6>
      )}
    </div>
  );
};

export default Toggle;
