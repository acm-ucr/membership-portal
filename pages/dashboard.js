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
          .filter(
            (a) =>
              (a.description.startsWith("General:") ||
                a.description.startsWith("Technical:") ||
                a.description.startsWith("Social:") ||
                a.description.startsWith("Professional:")) &&
              new Date(a.start.dateTime) > new Date()
          )
          .sort(
            (a, b) => new Date(a.start.dateTime) - new Date(b.start.dateTime)
          )
          .slice(-5, response.data.items.length);
        setEvents(events);
        console.log(events);
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
            <div key={index}>
              <Announcement
                details={event.description.replace(
                  event.description.split(" ")[0],
                  ""
                )}
                title={event.summary}
                location={event.location}
                background={
                  colorMappings[
                    `${event.description
                      .split(" ")[0]
                      .toLowerCase()
                      .replace(":", "")}`
                  ]
                }
                text={
                  colorMappingsText[
                    `${event.description
                      .split(" ")[0]
                      .toLowerCase()
                      .replace(":", "")}`
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
            </div>
          ))}
      </Col>
    </Row>
  );
};

export default DashboardPage;
