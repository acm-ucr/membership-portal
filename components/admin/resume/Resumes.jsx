import React, { useEffect, useState } from "react";
import Header from "../../Header";
import Resume from "./Resume";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import Popup from "./Popup";

const Resumes = () => {
  const [resumes, setResumes] = useState([]);
  const [popup, setPopup] = useState({
    visible: false,
    data: null,
  });

  useEffect(() => {
    axios.get("/api/getResumes").then((response) => setResumes(response.data));
  }, []);

  return (
    <div className="pt-[10vh] flex flex-col justify-center items-start w-11/12">
      {popup.visible && <Popup data={popup.data} setPopup={setPopup} />}
      <Header title="resume" color="bg-acm-marine" />
      <p className="text-acm-black text-2xl font-lexend font-semibold px-2 pt-3">
        Submited Resumes:
      </p>
      <Row className="px-2 w-full">
        {resumes.map((resume, index) => (
          <Col key={index} xl={3}>
            {console.log(resume)}
            <Resume
              onClick={() =>
                setPopup({
                  visible: true,
                  data: { id: resume.id, link: resume.link, name: resume.name },
                })
              }
              link={resume.link}
              name={resume.name}
              date={new Date(resume.updated.seconds * 1000).toDateString()}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Resumes;
