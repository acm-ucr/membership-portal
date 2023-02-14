import React, { useEffect, useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Events from "./data/Events.jsx";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CustomToolbar from "./CustomToolbar.jsx";
import CustomEvent from "./CustomEvent.jsx";

import Event from "./Event.jsx";
import Modal from "./Modal.jsx";

const mLocalizer = momentLocalizer(moment);

const CalendarEvents = () => {
  const [events, setEvents] = useState([]);
  const [modalEvent, setModalEvent] = useState(null);

  useEffect(() => {
    setEvents(
      Events.filter((event) => {
        return event.start > new Date();
      }).slice(0, 8)
    );
  }, []);

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

      <Row className="w-11/12 mb-20 flex justify-center">
        <p className="text-center flex justify-center text-heading">
          Upcoming Events
        </p>
        {events.length ? (
          events.map((event, index) => (
            <Col className="p-3" md={6} lg={3} key={index}>
              <Event
                title={event.title}
                location={event.location}
                shadow={event.shadow}
                start={event.start}
                end={event.end}
                description={event.description}
              />
            </Col>
          ))
        ) : (
          <Col className="text-text flex justify-center text-center text-acm-black font-lexend p-3">
            No upcoming events, please check back later!
          </Col>
        )}
      </Row>
    </section>
  );
};

export default CalendarEvents;
