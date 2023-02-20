import React from "react";
import { FaTimes } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
const MockInterviewForm = ({ setFormState }) => {
  return (
    <>
      <div className="fixed inset-0 bg-acm-white opacity-50 w-full h-full"></div>
      <div className="absolute top-40 inset-x-0 w-full">
        <div className="flex justify-center isolation-auto ">
          <form className="bg-acm-black rounded-3xl w-1/2 flex flex-col">
            <div className="flex justify-between">
              <p className="font-lexend bg-acm-marine text-acm-black rounded-full m-3 text-2xl p-2 font-bold">
                mock interview request form
              </p>
              <button onClick={() => setFormState(0)}>
                <FaTimes className="text-3xl text-acm-marine m-4 hover:cursor-pointer" />
              </button>
            </div>
            <div className="ml-4 mb-4 mr-3">
              <label
                htmlFor="name"
                className="font-lexend text-acm-white text-lg font-medium m-1"
              >
                name
              </label>
              <input
                type="name"
                id="name"
                className="m-1 w-11/12 block rounded-lg font-lexend text-acm-black text-lg font-light pl-2 pt-0 pb-0"
                placeholder="your name"
              />
              <label
                htmlFor="email"
                className="font-lexend text-acm-white text-lg font-medium m-1"
              >
                email
              </label>
              <input
                type="email"
                id="email"
                className="m-2 border-0 focus:ring-2 focus:ring-acm-black focus:ring-offset-0 focus:outline-offset-2 focus:outline-2 focus:outline-acm-white w-11/12 block rounded-lg font-lexend text-acm-black text-lg font-light pl-2 pt-0 pb-0"
                placeholder="email"
              />
              <label
                htmlFor="typeOfInterview"
                className="font-lexend text-acm-white text-lg font-medium m-1"
              >
                type of interview
              </label>
              <div className="ml-3 felx items-center">
                <input
                  checked
                  id="typeOfInterview"
                  type="radio"
                  value="behavioral"
                  name="typeOfInterview"
                  className="w-3 h-3 text-acm-marine bg-gray-100 border-gray-300 focus:text-acm-marine cursor-pointer"
                />
                <label
                  htmlFor="typeOfInterview"
                  className="font-lexend text-acm-white text-lg font-light ml-3 mt-1 mb-1"
                >
                  behavioral
                </label>
              </div>
              <div className="ml-3 felx items-center">
                <input
                  checked
                  id="typeOfInterview"
                  type="radio"
                  value="technical"
                  name="typeOfInterview"
                  className="w-3 h-3 text-acm-marine bg-gray-100 border-gray-300 focus:text-acm-marine cursor-pointer"
                />
                <label
                  htmlFor="typeOfInterview"
                  className="font-lexend text-acm-white text-lg font-light ml-3 mt-1 mb-1"
                >
                  technical
                </label>
              </div>
              <label
                htmlFor="formatOfInterview"
                className="font-lexend text-acm-white text-lg font-medium m-1"
              >
                format of interview
              </label>
              <div className="ml-3 felx items-center">
                <input
                  checked
                  id="formatOfInterview"
                  type="radio"
                  value="in-person"
                  name="formatOfInterview"
                  className="w-3 h-3 text-acm-marine bg-gray-100 border-gray-300 focus:text-acm-marine cursor-pointer"
                />
                <label
                  htmlFor="formatOfInterview"
                  className="font-lexend text-acm-white text-lg font-light ml-3 mt-1 mb-1"
                >
                  in-person
                </label>
              </div>
              <div className="ml-3 felx items-center">
                <input
                  checked
                  id="typeOfInterview"
                  type="radio"
                  value="online"
                  name="formatOfInterview"
                  className="w-3 h-3 text-acm-marine bg-gray-100 border-gray-300 focus:text-acm-marine cursor-pointer"
                />
                <label
                  htmlFor="typeOfInterview"
                  className="font-lexend text-acm-white text-lg font-light ml-3 mt-1 mb-1"
                >
                  online
                </label>
              </div>
              <div className="flex justify-start items-center">
                <label
                  htmlFor="preferedLanguages"
                  className="font-lexend text-acm-white text-lg font-medium m-1"
                >
                  prefered languages
                </label>
                <p className="m-1 text-normal text-acm-gray font-lexend">
                  (choose all that apply)
                </p>
              </div>
              <Row className="m-2">
                <Col>
                  <input
                    id="preferedLanguages"
                    type="checkbox"
                    value="c"
                    class="w-4 h-4 text-acm-marine bg-gray-100 focus:ring-acm-white focus:ring-1"
                  />
                  <label
                    htmlFor="preferedLanguages"
                    className="font-lexend text-acm-white text-lg font-light ml-3 mt-1 mb-1"
                  >
                    c
                  </label>
                </Col>
                <Col>
                  <input
                    id="preferedLanguages"
                    type="checkbox"
                    value="python"
                    class="w-4 h-4 text-acm-marine bg-gray-100 focus:ring-acm-white focus:ring-1"
                  />
                  <label
                    htmlFor="preferedLanguages"
                    className="font-lexend text-acm-white text-lg font-light ml-3 mt-1 mb-1"
                  >
                    python
                  </label>
                </Col>
              </Row>
              <Row className="m-2">
                <Col>
                  <input
                    id="preferedLanguages"
                    type="checkbox"
                    value="c++"
                    class="w-4 h-4 text-acm-marine bg-gray-100 focus:ring-acm-white focus:ring-1"
                  />
                  <label
                    htmlFor="preferedLanguages"
                    className="font-lexend text-acm-white text-lg font-light ml-3 mt-1 mb-1"
                  >
                    c++
                  </label>
                </Col>
                <Col>
                  <input
                    id="preferedLanguages"
                    type="checkbox"
                    value="java"
                    class="w-4 h-4 text-acm-marine bg-gray-100 focus:ring-acm-white focus:ring-1"
                  />
                  <label
                    htmlFor="preferedLanguages"
                    className="font-lexend text-acm-white text-lg font-light ml-3 mt-1 mb-1"
                  >
                    java
                  </label>
                </Col>
              </Row>
              <Row className="m-2">
                <Col>
                  <input
                    id="preferedLanguages"
                    type="checkbox"
                    value="c#"
                    class="w-4 h-4 text-acm-marine bg-gray-100 focus:ring-acm-white focus:ring-1"
                  />
                  <label
                    htmlFor="preferedLanguages"
                    className="font-lexend text-acm-white text-lg font-light ml-3 mt-1 mb-1"
                  >
                    c#
                  </label>
                </Col>
                <Col>
                  <input
                    id="preferedLanguages"
                    type="checkbox"
                    value="javascript"
                    class="w-4 h-4 text-acm-marine bg-gray-100 focus:ring-acm-white focus:ring-1"
                  />
                  <label
                    htmlFor="preferedLanguages"
                    className="font-lexend text-acm-white text-lg font-light ml-3 mt-1 mb-1"
                  >
                    javascript
                  </label>
                </Col>
              </Row>

              <div className="flex justify-start items-center">
                <label
                  htmlFor="typesOfProblems"
                  className="font-lexend text-acm-white text-lg font-medium m-1"
                >
                  types of problems
                </label>
                <p className="m-1 text-normal text-acm-gray font-lexend">
                  (choose all that apply)
                </p>
              </div>
              <Row className="m-2">
                <Col>
                  <input
                    id="typesOfProblems"
                    type="checkbox"
                    value="arrays"
                    class="w-4 h-4 text-acm-marine bg-gray-100 focus:ring-acm-white focus:ring-1"
                  />
                  <label
                    htmlFor="typesOfProblems"
                    className="font-lexend text-acm-white text-lg font-light ml-3 mt-1 mb-1"
                  >
                    arrays
                  </label>
                </Col>
                <Col>
                  <input
                    id="typesOfProblems"
                    type="checkbox"
                    value="hashmaps"
                    class="w-4 h-4 text-acm-marine bg-gray-100 focus:ring-acm-white focus:ring-1"
                  />
                  <label
                    htmlFor="typesOfProblems"
                    className="font-lexend text-acm-white text-lg font-light ml-3 mt-1 mb-1"
                  >
                    hashmaps
                  </label>
                </Col>
              </Row>
              <Row className="m-2">
                <Col>
                  <input
                    id="typesOfProblems"
                    type="checkbox"
                    value="stack"
                    class="w-4 h-4 text-acm-marine bg-gray-100 focus:ring-acm-white focus:ring-1"
                  />
                  <label
                    htmlFor="typesOfProblems"
                    className="font-lexend text-acm-white text-lg font-light ml-3 mt-1 mb-1"
                  >
                    stack
                  </label>
                </Col>
                <Col>
                  <input
                    id="typesOfProblems"
                    type="checkbox"
                    value="dynamic programming"
                    class="w-4 h-4 text-acm-marine bg-gray-100 focus:ring-acm-white focus:ring-1"
                  />
                  <label
                    htmlFor="typesOfProblems"
                    className="font-lexend text-acm-white text-lg font-light ml-3 mt-1 mb-1"
                  >
                    dynamic programming
                  </label>
                </Col>
              </Row>
              <Row className="m-2">
                <Col>
                  <input
                    id="typesOfProblems"
                    type="checkbox"
                    value="queue"
                    class="w-4 h-4 text-acm-marine bg-gray-100 focus:ring-acm-white focus:ring-1"
                  />
                  <label
                    htmlFor="typesOfProblems"
                    className="font-lexend text-acm-white text-lg font-light ml-3 mt-1 mb-1"
                  >
                    queue
                  </label>
                </Col>
                <Col>
                  <input
                    id="typesOfProblems"
                    type="checkbox"
                    value="greedy algorithms"
                    class="w-4 h-4 text-acm-marine bg-gray-100 focus:ring-acm-white focus:ring-1"
                  />
                  <label
                    htmlFor="typesOfProblems"
                    className="font-lexend text-acm-white text-lg font-light ml-3 mt-1 mb-1"
                  >
                    greedy algorithms
                  </label>
                </Col>
              </Row>
              <Row className="m-2">
                <Col>
                  <input
                    id="typesOfProblems"
                    type="checkbox"
                    value="graphs"
                    class="w-4 h-4 text-acm-marine bg-gray-100 focus:ring-acm-white focus:ring-1"
                  />
                  <label
                    htmlFor="typesOfProblems"
                    className="font-lexend text-acm-white text-lg font-light ml-3 mt-1 mb-1"
                  >
                    graphs
                  </label>
                </Col>
                <Col>
                  <input
                    id="typesOfProblems"
                    type="checkbox"
                    value="divide & conquer"
                    class="w-4 h-4 text-acm-marine bg-gray-100 focus:ring-acm-white focus:ring-1"
                  />
                  <label
                    htmlFor="typesOfProblems"
                    className="font-lexend text-acm-white text-lg font-light ml-3 mt-1 mb-1"
                  >
                    divide & conquer
                  </label>
                </Col>
              </Row>
              <div className="flex justify-start items-center">
                <label
                  htmlFor="daysAndTime"
                  className="font-lexend text-acm-white text-lg font-medium m-1"
                >
                  days and time of availability
                </label>
                <p className="m-1 text-normal text-acm-gray font-lexend">
                  (choose all that apply)
                </p>
              </div>
              <div className="m-3 w-11/12 flex justify-between">
                <div className="w-1/5 m-0 ">
                  <input
                    type="checkbox"
                    id="daysAndTimeMon"
                    value="monday"
                    class="hidden peer"
                    required=""
                  />
                  <label
                    for="daysAndTimeMon"
                    className="w-full text-center text-acm-white border-2 border-acm-white bg-acm-black rounded-l-lg cursor-pointer   peer-checked:bg-acm-marine peer-checked:text-acm-black hover:text-gray-600hover:bg-acm-gray "
                  >
                    mon
                  </label>
                </div>
                <div className="w-1/5 m-0 ">
                  <input
                    type="checkbox"
                    id="daysAndTimeTue"
                    value="tuesday"
                    class="hidden peer"
                    required=""
                  />
                  <label
                    for="daysAndTimeTue"
                    className="w-full text-center text-acm-white border-2 border-acm-white bg-acm-black cursor-pointer   peer-checked:bg-acm-marine peer-checked:text-acm-black hover:text-gray-600hover:bg-acm-gray "
                  >
                    tue
                  </label>
                </div>
                <div className="w-1/5 m-0 ">
                  <input
                    type="checkbox"
                    id="daysAndTimeWed"
                    value="wednesday"
                    class="hidden peer"
                    required=""
                  />
                  <label
                    for="daysAndTimeWed"
                    className="w-full text-center text-acm-white border-2 border-acm-white bg-acm-black cursor-pointer   peer-checked:bg-acm-marine peer-checked:text-acm-black hover:text-gray-600hover:bg-acm-gray "
                  >
                    wed
                  </label>
                </div>
                <div className="w-1/5 m-0 ">
                  <input
                    type="checkbox"
                    id="daysAndTimeThu"
                    value="thursday"
                    class="hidden peer"
                    required=""
                  />
                  <label
                    for="daysAndTimeThu"
                    className="w-full text-center text-acm-white border-2 border-acm-white bg-acm-black cursor-pointer   peer-checked:bg-acm-marine peer-checked:text-acm-black hover:text-gray-600hover:bg-acm-gray "
                  >
                    thu
                  </label>
                </div>
                <div className="w-1/5 m-0 ">
                  <input
                    type="checkbox"
                    id="daysAndTimeFri"
                    value="friday"
                    class="hidden peer"
                    required=""
                  />
                  <label
                    for="daysAndTimeFri"
                    className="rounded-r-lg w-full text-center text-acm-white border-2 border-acm-white bg-acm-black cursor-pointer   peer-checked:bg-acm-marine peer-checked:text-acm-black hover:text-gray-600hover:bg-acm-gray "
                  >
                    fri
                  </label>
                </div>
              </div>
              <div className="m-3 w-11/12 grid grid-cols-8 justify-between ">
                <div className="m-0 ">
                  <input
                    type="checkbox"
                    id="daysAndTime10am"
                    value="10am"
                    class="hidden peer"
                    required=""
                  />
                  <label
                    for="daysAndTime10am"
                    className="w-full text-center text-acm-white border-2 border-acm-white bg-acm-black rounded-l-lg cursor-pointer   peer-checked:bg-acm-marine peer-checked:text-acm-black hover:text-gray-600hover:bg-acm-gray "
                  >
                    10am
                  </label>
                </div>
                <div className="m-0 ">
                  <input
                    type="checkbox"
                    id="daysAndTime11am"
                    value="11am"
                    class="hidden peer"
                    required=""
                  />
                  <label
                    for="daysAndTime11am"
                    className="w-full text-center text-acm-white border-2 border-acm-white bg-acm-black cursor-pointer   peer-checked:bg-acm-marine peer-checked:text-acm-black hover:text-gray-600hover:bg-acm-gray "
                  >
                    11am
                  </label>
                </div>
                <div className="m-0 ">
                  <input
                    type="checkbox"
                    id="daysAndTime12pm"
                    value="w12pm"
                    class="hidden peer"
                    required=""
                  />
                  <label
                    for="daysAndTime12pm"
                    className="w-full text-center text-acm-white border-2 border-acm-white bg-acm-black cursor-pointer   peer-checked:bg-acm-marine peer-checked:text-acm-black hover:text-gray-600hover:bg-acm-gray "
                  >
                    12pm
                  </label>
                </div>
                <div className="m-0 ">
                  <input
                    type="checkbox"
                    id="daysAndTime1pm"
                    value="1pm"
                    class="hidden peer"
                    required=""
                  />
                  <label
                    for="daysAndTime1pm"
                    className="w-full text-center text-acm-white border-2 border-acm-white bg-acm-black cursor-pointer   peer-checked:bg-acm-marine peer-checked:text-acm-black hover:text-gray-600hover:bg-acm-gray "
                  >
                    1pm
                  </label>
                </div>
                <div className="m-0 ">
                  <input
                    type="checkbox"
                    id="daysAndTime2pm"
                    value="2pm"
                    class="hidden peer"
                    required=""
                  />
                  <label
                    for="daysAndTime2pm"
                    className="w-full text-center text-acm-white border-2 border-acm-white bg-acm-black cursor-pointer   peer-checked:bg-acm-marine peer-checked:text-acm-black hover:text-gray-600hover:bg-acm-gray "
                  >
                    2pm
                  </label>
                </div>
                <div className="m-0 ">
                  <input
                    type="checkbox"
                    id="daysAndTime3pm"
                    value="3pm"
                    class="hidden peer"
                    required=""
                  />
                  <label
                    for="daysAndTime3pm"
                    className="w-full text-center text-acm-white border-2 border-acm-white bg-acm-black cursor-pointer   peer-checked:bg-acm-marine peer-checked:text-acm-black hover:text-gray-600hover:bg-acm-gray "
                  >
                    3pm
                  </label>
                </div>
                <div className="m-0 ">
                  <input
                    type="checkbox"
                    id="daysAndTime4pm"
                    value="4pm"
                    class="hidden peer"
                    required=""
                  />
                  <label
                    for="daysAndTime4pm"
                    className="w-full text-center text-acm-white border-2 border-acm-white bg-acm-black cursor-pointer   peer-checked:bg-acm-marine peer-checked:text-acm-black hover:text-gray-600hover:bg-acm-gray "
                  >
                    4pm
                  </label>
                </div>
                <div className="m-0 ">
                  <input
                    type="checkbox"
                    id="daysAndTime5pm"
                    value="5pm"
                    class="hidden peer"
                    required=""
                  />
                  <label
                    for="daysAndTime5pm"
                    className="rounded-r-lg w-full text-center text-acm-white border-2 border-acm-white bg-acm-black cursor-pointer   peer-checked:bg-acm-marine peer-checked:text-acm-black hover:text-gray-600hover:bg-acm-gray "
                  >
                    5pm
                  </label>
                </div>
              </div>
              <label
                htmlFor="comments"
                className="font-lexend text-acm-white text-lg font-medium m-1"
              >
                comments
              </label>
              <textarea
                id="comments"
                rows="4"
                class="font-lexend block p-2 w-full text-sm text-acm-black bg-acm-white rounded-xl "
                placeholder="Your message..."
              />
              <div className="w-full flex justify-end">
                <button className="bg-acm-marine text-acm-black text-xl font-semibold font-lexend px-12 py-1 mt-3 rounded-full ">
                  submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MockInterviewForm;
