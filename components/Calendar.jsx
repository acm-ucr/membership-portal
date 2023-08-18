import { useState, useContext } from "react";
import PortalContext from "./PortalContext.jsx";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar.jsx";
import CustomEvent from "./CustomEvent.jsx";
import Modal from "./Modal.jsx";
import axios from "axios";

const mLocalizer = momentLocalizer(moment);

const CalendarEvents = () => {
  googleCalenderApiKey = process.env.GOOGLE_CALENDAR_API_KEY;
  googleCalendarID = process.env.GOOGLE_CALENDAR_EMAIL;
  const url =
    "https://www.googleapis.com/calendar/v3/calendars/{googleCalendarID}/events?key={googleCalendarApiKey}&{singleEvents=true&orderBy=startTime&timeMin={current_time_str}&maxResults=10}";
  axios.get(url).then(
    (response) => {
      const result = response.data;
      console.log(result);
    },
    (error) => {
      console.log(error);
    }
  );
  const { events } = useContext(PortalContext);
  const [modalEvent, setModalEvent] = useState(null);
  return (
    events && (
      <div className="mb-2 h-[90vh] w-11/12">
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
    )
  );
};

export default CalendarEvents;
