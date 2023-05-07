import { useState, useContext } from "react";
import PortalContext from "./PortalContext.jsx";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar.jsx";
import CustomEvent from "./CustomEvent.jsx";
import Modal from "./Modal.jsx";

const mLocalizer = momentLocalizer(moment);

const CalendarEvents = () => {
  const { events } = useContext(PortalContext);
  console.log("events: Calendar Page", events);
  const [modalEvent, setModalEvent] = useState(null);

  return (
    <div className="mt-5 h-[90vh] w-11/12">
      <Calendar
        className="font-lexend m-0 p-0"
        events={events}
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
  );
};

export default CalendarEvents;
