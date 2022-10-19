import React from "react";
import { FaTimes } from "react-icons/fa";
const ResumeReviewForm = () => {
  return (
    <>
      <div className="fixed bg-acm-white opacity-50 w-full h-full"></div>
      <div className="absolute w-full">
        <div className="flex justify-center isolation-auto">
          <form className="bg-acm-black rounded-3xl w-1/2 flex flex-col">
            <div className="flex justify-between">
              <p className="font-lexend bg-acm-orange text-acm-black rounded-full m-3 text-2xl p-2 font-bold">
                resume review form details
              </p>
              <FaTimes className="text-3xl text-acm-orange m-4 hover:cursor-pointer" />
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
              <div className="flex justify-start items-center">
                <label
                  htmlFor="resume"
                  className="font-lexend text-acm-white text-lg font-medium m-1"
                >
                  resume
                </label>
                <p className="m-1 text-normal text-acm-gray font-lexend">
                  (link or pdf)
                </p>
              </div>
              <input
                type="resume"
                id="resume"
                className="m-2 border-0 focus:ring-2 focus:ring-acm-black focus:ring-offset-0 focus:outline-offset-2 focus:outline-2 focus:outline-acm-white w-11/12 block rounded-lg font-lexend text-acm-black text-lg font-light pl-2 pt-0 pb-0"
                placeholder="resume"
              />
              <label
                htmlFor="formatOfInterview"
                className="font-lexend text-acm-white text-lg font-medium m-1"
              >
                format of interview
              </label>
              <div className="ml-3 flex items-center">
                <input
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
              <div className="ml-3 flex items-center">
                <input
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
                  virtual
                </label>
              </div>
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
                    className="hidden peer"
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
                <button className="bg-acm-orange text-acm-black text-xl font-semibold font-lexend px-12 py-1 mt-3 rounded-full ">
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

export default ResumeReviewForm;
