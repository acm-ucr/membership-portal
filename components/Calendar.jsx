import { useState, useEffect } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar.jsx";
import CustomEvent from "./CustomEvent.jsx";
import axios from "axios";
import {
  colorMappings,
  colorMappingsText,
  colorMappingsBorder,
} from "./data/CalendarColors.jsx";

import Modal from "./Modal.jsx";

const mLocalizer = momentLocalizer(moment);

const CalendarEvents = () => {
  const [modalEvent, setModalEvent] = useState(null);
  const [calendarEvents, setCalendarEvents] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}`
      )
      .then((response) => {
        const calendarEvents = response.data.items
          .filter((a) => {
            a.start = new Date(a.start.dateTime);
            a.end = new Date(a.end.dateTime);

            a.color =
              colorMappings[
                `${a.description.split(" ")[0].toLowerCase().replace(":", "")}`
              ];

            a.textColor =
              colorMappingsText[
                `${a.description.split(" ")[0].toLowerCase().replace(":", "")}`
              ];

            a.border =
              colorMappingsBorder[
                `${a.description.split(" ")[0].toLowerCase().replace(":", "")}`
              ];

            return (
              (a.description.startsWith("General:") ||
                a.description.startsWith("Technical:") ||
                a.description.startsWith("Social:") ||
                a.description.startsWith("Career:") ||
                a.description.startsWith("Academic:")) &&
              new Date(a.start) > new Date()
            );
          })
          .sort((a, b) => {
            return new Date(a.start) - new Date(b.start);
          });
        console.log(calendarEvents);
        setCalendarEvents(calendarEvents);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  return (
    <section className="w-full flex justify-center items-center flex-col">
      <div className="mb-5 w-11/12 flex justify-center items-center">
        <div className="h-[110vh] w-full relative">
          <Calendar
            className="font-lexend w-full m-0 p-0"
            events={calendarEvents}
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
