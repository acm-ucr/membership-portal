import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import Home from "../../components/Home";
import Announcement from "../../components/Announcement";
import Point from "../../components/Point";
import PortalContext from "../../components/PortalContext";
import {
  colorMappings,
  colorMappingsText,
} from "../../components/data/AnnouncementData";
import ProtectedPage from "../../components/ProtectedPage";

const DashboardPage = () => {
  const { announcements } = useContext(PortalContext);

  return (
    announcements && (
      <ProtectedPage title="Dashboard" restrictions={["member"]}>
        <div className="flex justify-center ">
          <Row className="pt-[10vh] w-11/12 m-0">
            <Col xl={12} className="p-0">
              <Home />
            </Col>
            <Col
              xl={7}
              className="w-full flex flex-col items-start justify-start"
            >
              <div className="bg-black w-full h-full flex flex-col items-center rounded-[40px]">
                <div className="w-11/12 justify-start items-start">
                  <span className="inline-block align-top py-2 px-3 rounded-full text-3xl font-semibold mb-3 mt-4 bg-acm-white text-acm-black board">
                    announcements
                  </span>
                </div>
                {announcements.length != 0 ? (
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
                        date={new Date(event.start).toLocaleDateString(
                          "en-US",
                          {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                        time={new Date(event.start).toLocaleTimeString(
                          "en-US",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}
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
        )
      </ProtectedPage>
    )
  );
};

export default DashboardPage;
