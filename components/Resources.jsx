import React, { useState } from "react";
import Resource from "./Resource";
import TimeFilter from "./TimeFilter";
import { Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [selectedTime, setSelectedTime] = useState("today");
  const [today, setToday] = useState(new Date());
  const [NoResources, setNoResources] = useState(true);

  useEffect(() => {
    axios
      .get("/api/getAllResources")
      .then((response) => {
        setResources(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    setNoResources(true);
    if (selectedTime == "today") {
      setToday(new Date().setDate(new Date().getDate() - 1));
    } else if (selectedTime == "last week") {
      setToday(new Date().setDate(new Date().getDate() - 7));
    } else if (selectedTime == "last month") {
      setToday(new Date().setMonth(new Date().getMonth() - 1));
    } else if (selectedTime == "last year") {
      setToday(new Date().setYear(new Date().getYear() - 7));
    }
  }, [selectedTime]);
  return (
    <div className="w-11/12 flex items-center flex-col justify-center">
      <TimeFilter setSelectedTime={setSelectedTime} />
      <Row className="w-11/12 items-center !mt-16">
        {resources.map((recourceCard, index) => {
          NoResources = !(
            new Date(recourceCard.data.time.seconds * 1000) > new Date(today)
          );
          return !NoResources ? (
            <Col className="p-3" xs={12} sm={6} md={4} lg={3} key={index}>
              <Resource
                titles={recourceCard.title}
                documentLink={recourceCard.data.slides}
                youtubeLink={recourceCard.data.youtube}
                githubLink={recourceCard.data.github}
              />
            </Col>
          ) : (
            <React.Fragment key={index}></React.Fragment>
          );
        })}
      </Row>
      {NoResources ? (
        <p className="font-lexend font-medium text-2xl">
          No resources available in this time slot
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Resources;
