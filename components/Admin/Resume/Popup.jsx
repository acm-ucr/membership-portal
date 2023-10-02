import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaTimes } from "react-icons/fa";

const Popup = ({ data, setPopup }) => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    axios
      .put("/api/feedback", {
        id: data.id,
        feedback: feedback,
      })
      .then(() => {
        toast("✅ Feedback Sent!");
        setPopup({
          data: null,
          visible: false,
        });
      });
  };

  return (
    <div className="fixed bg-black/20 w-screen h-screen flex items-center justify-center top-0 left-0">
      <div className="w-3/4 bg-white h-3/4 p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="mb-0 text-3xl flex items-center">
            {data.name}
            <a
              href={data.link}
              target="_blank"
              className="no-underline text-acm-marine text-xl px-2"
              rel="noreferrer"
            >
              {data.link}
            </a>
          </div>

          <FaTimes
            className="text-3xl hover:text-red-500 hover:cursor-pointer"
            onClick={() => setPopup({ data: null, visible: false })}
          />
        </div>
        <textarea
          className="border-black border-2 rounded-xl p-2 outline-none w-full h-5/6 mt-3"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-acm-marine rounded-full px-3 py-1 font-semibold hover:border-black border-2 border-transparent"
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
