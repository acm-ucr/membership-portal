import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { useRouter } from "next/router";

const ApplyPage = () => {
  const [data, setData] = useState({
    uid: "8",
    name: "",
    email: "",
    year: 2026,
    major: "Computer Science",
    response: "",
  });

  const thisYear = new Date().getFullYear();
  const years = Array.from(new Array(6), (val, index) => index + thisYear);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser !== null) {
        setData({
          ...data,
          uid: currentUser.uid,
          email: currentUser.email,
          name: currentUser.displayName,
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
    if (data.uid && data.name && data.email) {
      axios.post("/api/addApplication", {
        uid: data.uid,
        name: data.name,
        email: data.email,
        major: data.major,
        year: data.year,
        response: data.response,
      });
      setSubmit(true);
    }
  };

  const handleyearChange = (event) => {
    setData({
      ...data,
      year: event.target.value,
    });
  };

  const handleNameChange = (event) => {
    setData({
      ...data,
      name: event.target.value,
    });
  };
  const handleEmailChange = (event) => {
    setData({
      ...data,
      email: event.target.value,
    });
  };

  const [count, setCount] = useState(300);
  const [submit, setSubmit] = useState(false);

  return (
    <div className="pt-20 h-screen w-screen flex justify-center items-start">
      <div className="w-11/12">
        <p className="font-lexend text-4xl lg:text-6xl text-black my-4 font-semibold">
          become a member
        </p>
        <Row className="text-acm-white p-3 py-4 flex justify-center w-full bg-acm-black rounded-3xl items-center">
          <Col className="w-full flex justify-evenly items-start flex-col">
            <div className="w-full flex justify-center items-center flex-col">
              <Col className="w-11/12">
                <Col
                  xl={11}
                  className="flex mb-2 justify-center items-start flex-col"
                >
                  <p className="pl-3 font-semibold text-2xl m-1 lg:text-2xl font-lexend">
                    name
                  </p>
                  <input
                    className="w-full text-acm-black border-black border-2 py-2 rounded-full px-4 text-xl font-lexend"
                    type="text"
                    value={data.name}
                    onChange={handleNameChange}
                  />
                </Col>
                <Col
                  xl={11}
                  className="flex mb-2 justify-center items-start flex-col"
                >
                  <p className="pl-3 font-semibold text-2xl m-1 lg:text-2xl font-lexend">
                    email
                  </p>
                  <input
                    placeholder="netid@ucr.edu"
                    className="w-full text-acm-black border-black border-2 py-2 rounded-full px-4 text-xl font-lexend"
                    type="text"
                    value={data.email}
                    onChange={handleEmailChange}
                  />
                </Col>
                <Col
                  xl={11}
                  className="flex mb-2 justify-center items-start flex-col"
                >
                  <p className="pl-3 font-semibold text-2xl m-1 lg:text-2xl font-lexend">
                    graduating year
                  </p>
                  <select
                    type="text"
                    name="year"
                    placeholder={data.year}
                    onChange={handleyearChange}
                    className="text-acm-black text-lg font-lexend bg-white rounded-full w-full"
                  >
                    <option value="none" selected disabled hidden>
                      Select a Year
                    </option>

                    {years.map((year) => (
                      <option key={year.index} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </Col>
                <Col
                  xl={11}
                  className="flex justify-center items-start flex-col"
                >
                  <p className="pl-3 font-semibold text-2xl m-1 lg:text-2xl font-lexend">
                    major
                  </p>
                  <select
                    className="text-acm-black text-lg font-lexend bg-white rounded-full w-full"
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
                    <option value="Other">Other</option>
                  </select>
                </Col>
              </Col>
            </div>
          </Col>
          <Col className="w-full flex justify-evenly items-start flex-col">
            <div className="w-full flex justify-center items-center flex-col">
              <Col className="w-11/12">
                <Col
                  xl={12}
                  className="flex justify-center items-start flex-col mt-4"
                >
                  <div className="flex justify-between items-center w-full">
                    <p className="font-semibold text-2xl lg:text-4xl font-lexend text-left">
                      Why do you want to join ACM?
                    </p>
                    <p className="m-0 text-center font-semibold">
                      {count} Characters Left
                    </p>
                  </div>

                  <textarea
                    className="w-full rounded text-acm-black font-lexend resize-none"
                    maxLength={300}
                    rows="6"
                    onChange={(e) => {
                      setCount(300 - e.target.value.length);
                      setData({ ...data, response: e.target.value });
                    }}
                  />
                </Col>
              </Col>
              <div className="flex  w-11/12 flex-col">
                <div className="flex mt-4 mb-2">
                  <button
                    onClick={handleSubmit}
                    className="text-2xl w-1/2 overflow-hidden px-10 py-0 font-lexend rounded-full border-4 border-acm-blue bg-acm-blue text-acm-white hover:border-acm-white "
                  >
                    sign up
                  </button>

                  <div className="flex flex-col justify-center w-full">
                    <p className="font-lexend text-xl p-0 m-0 text-center">
                      already a member?
                    </p>
                    <button
                      onClick={() => {
                        router.push("/");
                      }}
                      className="font-lexend text-xl p-0 m-0 text-center"
                    >
                      sign in
                    </button>
                  </div>
                </div>
                {submit && (
                  <p className="m-0 p-0 font-semibold text-center">
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
