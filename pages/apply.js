import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import ApplicationProfile from "../components/ApplicationProfile";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import colors from "../components/data/Colors.jsx";

const ApplyPage = () => {
  const [data, setData] = useState({
    uid: "",
    name: "",
    email: "",
    year: 2026,
    major: "Computer Science",
    response: "",
  });

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser !== null) {
        setData({
          ...data,
          uid: currentUser.uid,
          email: currentUser.email,
          name: currentUser.displayName,
          image: currentUser.photoURL,
        });
      }
    });
  }, []);

  const handleMajorChange = (event) => {
    setData({
      ...data,
      major: event.target.value,
    });
  };

  const handleSubmit = () => {
    axios.post("/api/addApplication", {
      uid: data.uid,
      name: data.name,
      email: data.email,
      major: data.major,
      year: data.year,
      response: data.response,
    });
    setSubmit(true);
  };

  const handleyearChange = (event) => {
    setData({
      ...data,
      year: event.target.value,
    });
  };

  const getOptions = () => {
    const date = new Date().getFullYear();
    const years = [];

    for (let i = date; i < date + 6; i++) {
      years.push(<option value={i}>{i}</option>);
    }

    return years;
  };

  const [count, setCount] = useState(300);
  const [submit, setSubmit] = useState(false);

  return (
    <div className="pt-20 h-screen w-screen flex justify-center items-start">
      <div className="w-11/12">
        <p className="font-lexend text-4xl lg:text-6xl text-black text-center my-4 font-semibold">
          ACM Member Application
        </p>
        <Row className="flex justify-center w-full items-center">
          <Col md={4} sm={6}>
            <ApplicationProfile
              color={colors[1]}
              name={data.name}
              email={data.email}
              image={data.image}
            />
          </Col>
          <Col className="w-full flex justify-evenly items-start flex-col">
            <div className="w-full flex justify-center items-center flex-col">
              <Row className="w-11/12">
                <Col
                  xl={6}
                  className="flex justify-center items-start flex-col"
                >
                  <p className="font-semibold text-2xl lg:text-4xl font-lexend">
                    Major
                  </p>
                  <select
                    className="text-acm-black text-lg font-lexend pb-1 bg-white rounded-lg w-full"
                    onChange={handleMajorChange}
                  >
                    <option value="none" selected disabled hidden>
                      Select a Major
                    </option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Computer Science w/ Business App">
                      Computer Science w/ Business App
                    </option>
                    <option value="Computer Engineering">
                      Computer Engineering
                    </option>
                    <option value="Data Science">Data Science</option>
                    <option value="Electrical Engineering">
                      Electrical Engineering
                    </option>
                    <option value="Mechanical Engineering">
                      Mechanical Engineering
                    </option>
                    <option value="Bioengineering">Bioengineering</option>
                    <option value="Chemical Engineering">
                      Chemical Engineering
                    </option>
                    <option value="Environmental Engineering">
                      Environmental Engineering
                    </option>
                    <option value="Material Science and Engineering">
                      Material Science and Engineering
                    </option>
                    <option value="Robotics Engineering">
                      Robotics Engineering
                    </option>
                  </select>
                </Col>
                <Col
                  xl={6}
                  className="flex justify-center items-start flex-col"
                >
                  <p className="font-semibold text-2xl lg:text-4xl font-lexend">
                    Year
                  </p>
                  <select
                    type="text"
                    name="year"
                    placeholder={data.year}
                    onChange={handleyearChange}
                    className="text-acm-black text-lg font-lexend pb-1 bg-white rounded-lg w-full"
                  >
                    <option value="none" selected disabled hidden>
                      Select a Year
                    </option>

                    {getOptions()}
                  </select>
                </Col>
                <Col
                  xl={12}
                  className="flex justify-center items-start flex-col mt-4"
                >
                  <div className="flex justify-between items-center w-full">
                    <p className="font-semibold text-2xl lg:text-4xl font-lexend text-left">
                      Why do you want to join ACM?
                    </p>
                    <p className="m-0 font-semibold">{count} Characters Left</p>
                  </div>

                  <textarea
                    className="w-full rounded resize-none"
                    maxLength={300}
                    rows="6"
                    onChange={(e) => {
                      setCount(300 - e.target.value.length);
                      setData({ ...data, response: e.target.value });
                    }}
                  />
                </Col>
              </Row>
              <div className="w-11/12 flex justify-end flex-col my-4">
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 rounded-lg text-lg border-4 border-acm-lightpurple  text-acm-lightpurple hover:bg-acm-lightpurple hover:text-white"
                >
                  Submit
                </button>
                {submit && (
                  <p className="font-semibold text-xl text-center my-2">
                    Thank you for submitting!
                  </p>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ApplyPage;
