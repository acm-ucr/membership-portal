import { useState, useEffect } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar.jsx";
import CustomEvent from "./CustomEvent.jsx";
import Modal from "./Modal.jsx";
import {
  colorMappings,
  colorMappingsText,
  colorMappingsBorder,
} from "../../../data/CalendarColors";
import axios from "axios";

const mLocalizer = momentLocalizer(moment);

const CalendarEvents = () => {
  const [events, setEvents] = useState([]);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=starttime`
      )
      .then((response) => {
        const calendarEvents = response.data.items.filter((a) => {
          if (a.description) {
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
              a.description.startsWith("General:") ||
              a.description.startsWith("Technical:") ||
              a.description.startsWith("Social:") ||
              a.description.startsWith("Career:") ||
              a.description.startsWith("Academic:") ||
              a.description.startsWith("Project:")
            );
          }
        });
        setEvents(calendarEvents);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    events && (
      <div className="mb-2 h-[90vh] w-full">
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
              className: bg,
            };
          }}
          onSelectEvent={(event) => setModal(event)}
        />
        <Modal event={modal} setState={setModal} />
      </div>
    )
  );
};

export default CalendarEvents;
