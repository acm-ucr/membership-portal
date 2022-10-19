import React from "react";
import Resource from "./Resource";
import TimeFilter from "./TimeFilter";
import { Col, Row } from "react-bootstrap";

const recourceCardList = [
  {
    title: "API Workshop",
    documentlink: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
    youtubelink: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
    gitlink: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
  },
  {
    title: "Professional Development Workshop",
    documentlink: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
    youtubelink: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
    gitlink: "",
  },
  {
    title: "Web Development Workshop",
    documentlink: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
    youtubelink: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
    gitlink: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
  },
  {
    title: "Web Development Workshop",
    documentlink: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
    youtubelink: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
    gitlink: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
  },
];

const Resources = () => {
  return (
    <div className="w-11/12 flex items-center flex-col justify-center">
      <TimeFilter />
      <Row className="w-11/12 items-center !mt-16">
        {recourceCardList.map((recourceCard, index) => (
          <Col className="p-3" xs={12} sm={6} md={4} lg={3} key={index}>
            <Resource
              titles={recourceCard.title}
              documentLink={recourceCard.documentlink}
              youtubeLink={recourceCard.youtubelink}
              githubLink={recourceCard.gitlink}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Resources;
