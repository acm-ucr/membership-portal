import React, { useState } from "react";
import axios from "axios";

export default function CardAccess({ email, name }) {
  const [CardNumber, setCardNumber] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/submitCardNumber", {
        name: name,
        email: email,
        cardNumber: CardNumber,
        sheetID: "1i0pR0R_SodN9enyU3ZWlboz2AvfikZAwrB779vjbQ8E",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <input
          value={CardNumber}
          placeholder="card Number"
          onChange={(e) => {
            setCardNumber(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
