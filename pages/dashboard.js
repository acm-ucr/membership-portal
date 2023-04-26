import { useState, useEffect, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import Home from "../components/Home";
import Announcement from "../components/Announcement";
import Point from "../components/Point";
import PortalContext from "../components/PortalContext";

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
  const { user } = useContext(PortalContext);
  console.log("user", user);
  const { events } = useContext(PortalContext);
  console.log("events:", events);

  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    // axios
    //   .get(
    //     `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}`
    //   )
    //   .then((response) => {
    //     const events = response.data.items
    setFilteredEvents(
      events
        .filter(
          (a) =>
            (a.description.startsWith("General:") ||
              a.description.startsWith("Technical:") ||
              a.description.startsWith("Social:") ||
              a.description.startsWith("Professional:")) &&
            new Date(a.start.dateTime) > new Date()
        )
        .sort((a, b) => new Date(a.start.dateTime) - new Date(b.start.dateTime))
        .slice(0, 5)
    );

    console.log("filteredEvents", filteredEvents);
    // setEvents(events);
    // });
  }, []);

  return (
    <>
      {user && (
        <div className="flex justify-center">
          <Row className="pt-[14vh] w-11/12 m-0">
            <Col xl={12} className="p-0">
              <Home />
            </Col>
            <Col
              xl={7}
              className="w-full flex flex-col items-start justify-center"
            >
              <div className="bg-black w-full flex flex-col items-center justify-center rounded-[40px]">
                <div className="w-11/12 justify-start items-start">
                  <p className="inline-block py-2 px-3 rounded-full text-3xl font-semibold mb-3 mt-4 bg-acm-white text-acm-black board">
                    announcements
                  </p>
                </div>
                {filteredEvents &&
                  filteredEvents.map((event, index) => (
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
              </div>
            </Col>
            <Col xl={5} className="flex flex-col items-end">
              <div className="bg-black w-full flex flex-col items-center justify-center rounded-[40px]">
                <div className="w-11/12 justify-start items-center md:items-start">
                  <p className="inline-block py-2 px-3 rounded-full text-3xl font-semibold mb-3 mt-4 bg-acm-white text-acm-black board">
                    Points
                  </p>
                </div>
                <Point points={user?.points} />
              </div>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default DashboardPage;
