import Home from "./Home";
import Announcement from "./Announcement";
import Point from "./Point";
import { Col, Row } from "react-bootstrap";
import {
  colorMappings,
  colorMappingsText,
  colorMappingsBorder,
} from "../../data/AnnouncementData";
import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [announcements, setAnnouncements] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
        }/events?key=${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY
        }&singleEvents=true&orderBy=starttime&maxResults=5&timeMin=${new Date().toISOString()}`
      )
      .then((response) => {
        const events = response.data.items.filter((a) => {
          if (a.description) {
            a.start = new Date(a.start.dateTime);
            a.end = new Date(a.end.dateTime);
            a.color =
              colorMappings[
                a.description.split(" ")[0].toLowerCase().replace(":", "")
              ];

            a.textColor =
              colorMappingsText[
                a.description.split(" ")[0].toLowerCase().replace(":", "")
              ];

            a.border =
              colorMappingsBorder[
                a.description.split(" ")[0].toLowerCase().replace(":", "")
              ];

            return (
              a.description.startsWith("General:") ||
              a.description.startsWith("Technical:") ||
              a.description.startsWith("Social:") ||
              a.description.startsWith("Career:") ||
              a.description.startsWith("Academic:")
            );
          }
        });
        setAnnouncements(events);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex justify-center ">
      <Row className="pt-[10vh] w-11/12 m-0">
        <Col xl={12} className="p-0">
          <Home />
        </Col>
        <Col xl={7} className="w-full flex flex-col items-start justify-start">
          <div className="bg-black w-full h-full flex flex-col items-center rounded-[40px]">
            <div className="w-11/12 justify-start items-start">
              <span className="inline-block align-top py-2 px-3 rounded-full text-3xl font-semibold mb-3 mt-4 bg-acm-white text-acm-black board">
                announcements
              </span>
            </div>
            {announcements.length !== 0 ? (
              announcements.map((event, index) => (
                <div
                  className="w-full flex items-center justify-center"
                  key={index}
                >
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
                    date={new Date(event.start).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                    time={new Date(event.start).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  />
                </div>
              ))
            ) : (
              <div className="h-full text-acm-white font-lexend text-3xl mt-5">
                <p>no upcoming events</p>
              </div>
            )}
          </div>
        </Col>
        <Col xl={5} className="flex flex-col items-end">
          <div className="bg-black w-full flex flex-col items-center justify-center rounded-[40px]">
            <div className="w-11/12 justify-start items-center md:items-start">
              <p className="inline-block py-2 px-3 rounded-full text-3xl font-semibold mb-3 mt-4 bg-acm-white text-acm-black board">
                Points
              </p>
            </div>
            <Point />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
