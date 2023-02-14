import React, { useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Events from "./data/Events.jsx";
import CustomToolbar from "./CustomToolbar.jsx";
import CustomEvent from "./CustomEvent.jsx";

import Modal from "./Modal.jsx";

const mLocalizer = momentLocalizer(moment);

const CalendarEvents = () => {
  const [modalEvent, setModalEvent] = useState(null);

  return (
    <section className="w-full flex justify-center items-center flex-col mt-[12vh]">
      <p className="text-center font-lexend flex justify-center text-heading m-0 pt-4">
        Calendar of Events
      </p>
      <div className="mb-5 w-11/12 flex justify-center items-center">
        <div className="h-[110vh] w-full relative">
          <Calendar
            className="font-lexend w-full m-0 p-0"
            events={Events}
            localizer={mLocalizer}
            defaultView="month"
            views={["month"]}
            components={{
              event: CustomEvent,
              toolbar: CustomToolbar,
            }}
            eventPropGetter={(event) => {
              return { className: `${event.color}` };
            }}
            dayPropGetter={(event) => {
              const bg =
                new Date(event).toLocaleDateString() ==
                new Date().toLocaleDateString()
                  ? "!bg-acm-green"
                  : "!bg-acm-white";
              return {
                className: `${bg}`,
                style: {
                  margin: 0,
                  padding: 0,
                },
              };
            }}
            onSelectEvent={(event) => {
              setModalEvent(event);
            }}
          />
          <Modal event={modalEvent} setState={setModalEvent} />
        </div>
      </div>
    </section>
  );
};

export default CalendarEvents;
