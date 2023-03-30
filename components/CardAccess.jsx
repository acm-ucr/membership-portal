/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from "react";
import axios from "axios";
import UserContext from "./UserContext";

export default function CardAccess({ email, name, rowNum, uid }) {
  const [CardNumber, setCardNumber] = useState("");
  const { user, setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    // e.preventDefault();
    axios
      .post("/api/submitCardNumber", {
        name: name,
        email: email,
        rowNum: rowNum,
        cardNumber: CardNumber,
        sheetID: "1i0pR0R_SodN9enyU3ZWlboz2AvfikZAwrB779vjbQ8E",
        uid: uid,
      })
      .then((res) => {
        setUser({ ...user, row: res.data });
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" h-screen flex justify-center items-center flex-col w-full">
      <p className="text-3xl lg:text-6xl font-lexend bg-acm-blue rounded-full px-12 py-3 m-1 text-white">
        ACM Clubroom Access
      </p>
      <p className="text-lg md:text-xl font-lexend m-2">location: WCH 127</p>
      <p className="text-xl lg:text-3xl font-lexend">
        Please enter the number at the bottom right of your R'Card
      </p>
      <form
        onSubmit={handleSubmit}
        className=" flex justify-center items-center flex-col w-full"
      >
        <input
          className="w-10/12 lg:w-6/12 border-black border-2 rounded-full py-2 px-4 text-xl font-lexend"
          value={CardNumber}
          placeholder="card Number"
          onChange={(e) => {
            let value = e.target.value;
            if (value[value.length - 1] == " ") {
              value = value.slice(0, value.length - 1);
            }
            let count = 0;
            for (let i = 0; i < value.length; i++) {
              count++;
              if (count > 4) {
                if (value[i] != " ") {
                  value = value.slice(0, i) + " " + value.slice(i);
                  i++;
                }
                count = 0;
              }
            }
            setCardNumber(value);
          }}
        />
        <button className=" rounded-full py-2 px-4 text-xl font-lexend m-3 border-2 border-black hover:bg-acm-blue hover:text-white hover:border-acm-blue">
          Submit
        </button>
      </form>
    </div>
  );
}
