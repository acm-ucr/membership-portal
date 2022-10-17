import React from "react";
import Accordion from "react-bootstrap/Accordion";

const TimeFilter = () => {
  return (
    <div>
      <Accordion
        className="w-60 text-2xl font-semibold"
        defaultActiveKey="none"
      >
        <Accordion.Item className="border-0" eventKey="0">
          <Accordion.Button className="!flex h-12 mb-[-20px] !bg-acm-black !text-acm-white after:!bg-[url(/drop-down-arrow.png)] after:self-center !rounded-3xl">
            <p className="text-2xl m-0">last week</p>
          </Accordion.Button>
          <Accordion.Body className="ml-auto mr-auto w-56 flex items-center justify-center h-16 !pt-[30px] text-center border-acm-black border-y border-t-0 border-x-[3px] cursor-pointer hover:bg-acm-blue">
            today
          </Accordion.Body>
          <Accordion.Body className="ml-auto mr-auto w-56 flex items-center justify-center h-12 text-center border-acm-black border-y border-x-[3px] cursor-pointer hover:bg-acm-blue">
            last week
          </Accordion.Body>
          <Accordion.Body className="ml-auto mr-auto w-56 flex items-center justify-center h-12 text-center border-acm-black border-y border-x-[3px] cursor-pointer hover:bg-acm-blue">
            last month
          </Accordion.Body>
          <Accordion.Body className="ml-auto mr-auto w-56 flex items-center justify-center h-12 text-center border-acm-black border-y border-b-2 border-x-[3px] cursor-pointer hover:bg-acm-blue rounded-b-3xl">
            last year
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default TimeFilter;
