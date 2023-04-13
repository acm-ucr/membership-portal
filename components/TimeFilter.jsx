import Accordion from "react-bootstrap/Accordion";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const TimeFilter = ({ setSelectedTime }) => {
  const [clicked, setClicked] = useState(false);

  function timeOptionEvent(newTime) {
    setSelectedTime(newTime);
    document.querySelector("#selected-time").innerHTML = newTime;
    document.querySelector("#drop-down-btn").click();
    return newTime;
  }

  let button;
  if (clicked) button = <FaChevronUp className="absolute right-6" />;
  else button = <FaChevronDown className="absolute right-6" />;

  return (
    <div className="">
      <Accordion
        className="w-60 text-2xl font-semibold absolute z-50 right-[4.2%]"
        defaultActiveKey="none"
      >
        <Accordion.Item className="border-0 !bg-transparent my-3" eventKey="0">
          <Accordion.Button
            id="drop-down-btn"
            className="!flex h-12 mb-[-20px] !bg-acm-black !text-acm-white after:!bg-none after:self-center !rounded-3xl shadow-none"
            onClick={() => setClicked(!clicked)}
          >
            <p id="selected-time" className="text-2xl m-0">
              today
            </p>
            {button}
          </Accordion.Button>
          <Accordion.Body className="ml-auto mr-auto w-56 flex items-center justify-center h-16 text-center border-acm-black border-y border-t-0 border-x-[3px] cursor-pointer hover:bg-acm-blue p-0 bg-acm-white">
            <button
              className="w-full h-full pt-[20px]"
              onClick={() => timeOptionEvent("today")}
            >
              today
            </button>
          </Accordion.Body>
          <Accordion.Body className="ml-auto mr-auto w-56 flex items-center justify-center h-12 text-center border-acm-black border-y border-x-[3px] cursor-pointer hover:bg-acm-blue p-0 bg-acm-white">
            <button
              className="w-full h-full"
              onClick={() => timeOptionEvent("last week")}
            >
              last week
            </button>
          </Accordion.Body>
          <Accordion.Body className="ml-auto mr-auto w-56 flex items-center justify-center h-12 text-center border-acm-black border-y border-x-[3px] cursor-pointer hover:bg-acm-blue p-0 bg-acm-white">
            <button
              className="w-full h-full"
              onClick={() => timeOptionEvent("last month")}
            >
              last month
            </button>
          </Accordion.Body>
          <Accordion.Body className="ml-auto mr-auto w-56 flex items-center justify-center h-12 text-center border-acm-black border-y border-b-2 border-x-[3px] cursor-pointer hover:bg-acm-blue rounded-b-3xl p-0 bg-acm-white">
            <button
              className="w-full h-full"
              onClick={() => timeOptionEvent("last year")}
            >
              last year
            </button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default TimeFilter;
