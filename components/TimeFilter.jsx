import React from "react";
import Accordion from "react-bootstrap/Accordion";

function timeOptionEvent(e) {
  console.log("time option event");
  const newTime = e.target.innerHTML;
  document.querySelector("#selected-time").innerHTML = newTime;
  document.querySelector("#drop-down-btn").click();
}

const TimeFilter = () => {
  return (
    <div>
      <Accordion
        className="w-60 text-2xl font-semibold"
        defaultActiveKey="none"
      >
        <Accordion.Item className="border-0" eventKey="0">
          <Accordion.Button
            id="drop-down-btn"
            className="!flex h-12 mb-[-20px] !bg-acm-black !text-acm-white after:!bg-[url(/drop-down-arrow.png)] after:self-center !rounded-3xl shadow-none"
          >
            <p id="selected-time" className="text-2xl m-0">
              last week
            </p>
          </Accordion.Button>
          <Accordion.Body className="ml-auto mr-auto w-56 flex items-center justify-center h-16 text-center border-acm-black border-y border-t-0 border-x-[3px] cursor-pointer hover:bg-acm-blue p-0">
            <button
              className="w-full h-full pt-[20px]"
              onClick={timeOptionEvent}
            >
              today
            </button>
          </Accordion.Body>
          <Accordion.Body className="ml-auto mr-auto w-56 flex items-center justify-center h-12 text-center border-acm-black border-y border-x-[3px] cursor-pointer hover:bg-acm-blue p-0">
            <button className="w-full h-full" onClick={timeOptionEvent}>
              last week
            </button>
          </Accordion.Body>
          <Accordion.Body className="ml-auto mr-auto w-56 flex items-center justify-center h-12 text-center border-acm-black border-y border-x-[3px] cursor-pointer hover:bg-acm-blue p-0">
            <button className="w-full h-full" onClick={timeOptionEvent}>
              last month
            </button>
          </Accordion.Body>
          <Accordion.Body className="ml-auto mr-auto w-56 flex items-center justify-center h-12 text-center border-acm-black border-y border-b-2 border-x-[3px] cursor-pointer hover:bg-acm-blue rounded-b-3xl p-0">
            <button className="w-full h-full" onClick={timeOptionEvent}>
              last year
            </button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default TimeFilter;
