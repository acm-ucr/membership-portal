import React from "react";
import { Col, Row } from "react-bootstrap";
import Home from "../components/Home";
import Announcement from "../components/Announcement";
import Meetings from "../components/Meetings";


const announcements = [
  {
    title: "Event1",
    date: "october 26, 2022 (wednesday)",
    time: "11 am",
    location: "wch 127",
  },

  {
    title: "Event2",
    date: "december 25, 2022 (wednesday)",
    time: "8 am",
    location: "wch 127",
  },

  {
    title: "Event3",
    date: "october 26, 2022 (wednesday)",
    time: "11 am",
    location: "wch 127",
  },
  {
    title: "cs day",
    date: "october 26, 2022 (wednesday)",
    time: "11 am",
    location: "wch 127",
  },

  {
    title: "7leaves fundraiser",
    date: "october 26, 2022 (wednesday)",
    time: "11 am",
    location: "wch 127",
  },

  {
    title: "lockpicking social",
    date: "march 28, 2022 (wednesday)",
    time: "11 am",
    location: "wch 127",
  },
  {
    title: "lockpicking social",
    date: "october 26, 2022 (wednesday)",
    time: "11 am",
    location: "wch 127",
  },

  {
    title: "lockpicking social",
    date: "janruary, 2022 (wednesday)",
    time: "9 am",
    location: "wch 127",
  },

  {
    title: "lockpicking social",
    date: "october 26, 2022 (wednesday)",
    time: "11 am",
    location: "wch 127",
  },
];

const top5 = announcements.slice(0, 5);
const dashboard = () => {
  return (
    <Row>
      <Col xl={12}>
        <Home />
      </Col>
      <Col xl={6}>
        {top5.map((announcement) => (
        <Announcement
          key={announcement.title}
          title={announcement.title}
          date={announcement.date}
          location={announcement.location}
          time={announcement.time}
          color="purple"
        />
      ))}
      </Col>
      <Col xl={6}>
        <Meetings />
      </Col>
    </Row>
  );
};

export default dashboard;
