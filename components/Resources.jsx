import React, { useState } from "react";
import Resource from "./Resource";
import TimeFilter from "./TimeFilter";
import { Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";

// const recourceCardList = [
//   {
//     title: "API Workshop",
//     documentlink: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
//     youtubelink: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
//     gitlink: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
//   },
//   {
//     title: "Professional Development Workshop",
//     documentlink: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
//     youtubelink: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
//     gitlink: "",
//   },
//   {
//     title: "Web Development Workshop",
//     documentlink: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
//     youtubelink: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
//     gitlink: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
//   },
//   {
//     title: "Web Development Workshop",
//     documentlink: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
//     youtubelink: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
//     gitlink: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
//   },
// ];

const Resources = () => {
  const [resources, setResources] = useState([]);
  useEffect(() => {
    axios.get("/api/getAllResources")
    .then(
      response =>{
        setResources(response.data)
        console.log(response.data[0].data)
      }
    )
    .catch(error=>{
      console.log(error)
    })
  }, []);

  return (
    <div className="w-11/12 flex items-center flex-col justify-center">
      <TimeFilter />
      <Row className="w-11/12 items-center !mt-16">
        {resources.map((recourceCard, index) => (
          <Col className="p-3" xs={12} sm={6} md={4} lg={3} key={index}>
            <Resource
              titles={recourceCard.title}
              documentLink={recourceCard.data.slides}
              youtubeLink={recourceCard.data.youtube}
              githubLink={recourceCard.data.github}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Resources;
