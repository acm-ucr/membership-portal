import React from "react";
import Accordion from "react-bootstrap/Accordion";

const TimeFilter = () => {
  return (
    <div>
      <Accordion className="w-72" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Button
            className="!bg-acm-black !text-acm-white after:!bg-none"
            id="selected"
          >
            Last Month
          </Accordion.Button>
          <Accordion.Body
            className="text-center bg-red-500 border-acm-black border-y border-t-0 border-x-[3px] "
            id="today-selcet"
          >
            today
          </Accordion.Body>
          <Accordion.Body
            className="text-center border-acm-black border-y border-x-[3px]"
            id="last-week-select"
          >
            last week
          </Accordion.Body>
          <Accordion.Body
            className="text-center border-acm-black border-y border-x-[3px]"
            id="last-month-select"
          >
            last month
          </Accordion.Body>
          <Accordion.Body
            className="text-center border-acm-black border-y border-b-2 border-x-[3px]"
            id="last-year-select"
          >
            last year
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default TimeFilter;
