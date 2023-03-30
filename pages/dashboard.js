import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Home from "../components/Home";
import Announcement from "../components/Announcement";
import axios from "axios";

const colorMappings = {
  social: "bg-acm-green",
  professional: "bg-acm-lightpurple",
  general: "bg-acm-lightblue",
  technical: "bg-acm-yellow",
};

const colorMappingsText = {
  social: "text-acm-green",
  professional: "text-acm-lightpurple",
  general: "text-acm-lightblue",
  technical: "text-acm-yellow",
};

const DashboardPage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}`
      )
      .then((response) => {
        const events = response.data.items
          .sort((a, b) => a.start.dateTime > b.start.dateTime)
          .filter((a) => a.description.startsWith("General"))
          .slice(-5, response.data.items.length)
          .reverse();
        setEvents(events);
      });
  }, []);

  return (
    <Row className="pt-[14vh] w-full m-0">
      <Col xl={12} className="p-0">
        <Home />
      </Col>
      <Col xl={6}>
        {events &&
          events.map((event, index) => (
            <>
              <Announcement
                key={index}
                details={event.description}
                title={event.summary}
                location={event.location}
                background={
                  colorMappings[
                    `${event.description.split(" ")[0].toLowerCase()}`
                  ]
                }
                text={
                  colorMappingsText[
                    `${event.description.split(" ")[0].toLowerCase()}`
                  ]
                }
                date={new Date(event.start.dateTime).toLocaleDateString(
                  "en-US",
                  {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  }
                )}
                time={new Date(event.start.dateTime).toLocaleTimeString(
                  "en-US",
                  {
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )}
              />
            </>
          ))}
      </Col>
    </Row>
  );
};

export default DashboardPage;
