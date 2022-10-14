import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import { ToggleButton } from "react-bootstrap";

const Toggle = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const name = isAdmin ? "Admin" : "General";
    console.log(`You are currently ${name}`);
  });

  // ToggleButton is used to update the state variable `isAdmin`, which updates the icon displayed
  return (
    <div>
      <ToggleButton
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        checked={isAdmin}
        onChange={() => {
          setIsAdmin(!isAdmin);
        }}
      >
        Status
      </ToggleButton>
      {isAdmin ? (
        <h6 className="flex float-right rounded-full border-solid border-2 border-black pb-1 px-1 bg-black text-white">
          admin.
          <FaCircle />
        </h6>
      ) : (
        <h6 className="float-right rounded-full border-solid border-2 border-black pb-1 px-1">
          <FaCircle />
          general
        </h6>
      )}
    </div>
  );
};

export default Toggle;
