/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import axios from "axios";
import UserContext from "./UserContext";

export default function CardAccess({ email, name, rowNum, uid }) {
  const [CardNumber, setCardNumber] = useState("");
  const { user, setUser } = useContext(UserContext);

  const [showSnackBar, setShowSnackBar] = useState(false);
  const [message, setMessage] = useState("");
  const snackBar = (mes) => {
    setMessage(mes);
    setShowSnackBar(true);
    setTimeout(() => {
      setShowSnackBar(false);
      setMessage("");
    }, 3000);
  };
  const handleChange = (e) => {
    let value = e.target.value;
    value = value.replace(/\D+$/, "");
    value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (CardNumber.length != 19) {
      snackBar(
        "The card ID should be 16 bits, please double check your card number😅"
      );
      return;
    }
    console.log(rowNum);
    axios
      .post("/api/submitCardNumber", {
        name: name,
        email: email,
        rowNum: rowNum,
        cardNumber: CardNumber,
        sheetID: process.env.NEXT_PUBLIC_SHEET_ID,
        uid: uid,
      })
      .then((res) => {
        setUser({ ...user, row: res.data });
        snackBar("Succesfully added your card number! 🥳");
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        snackBar(
          "Failed to add your card! Try again or contact an ACM officer 😭"
        );
      });
  };
  return (
    <div className=" h-60 flex justify-center items-center flex-col w-full">
      <p className="text-xl lg:text-3xl font-lexend">
        Please enter the number at the bottom right of your R'Card
      </p>
      <form
        onSubmit={handleSubmit}
        className=" flex justify-center items-center flex-col w-full"
      >
        <input
          maxLength={19}
          autoComplete="off"
          className="w-10/12 lg:w-6/12 border-black border-2 rounded-full py-2 px-4 text-xl font-lexend"
          value={CardNumber}
          placeholder="card Number"
          onChange={handleChange}
        />
        <button className=" rounded-full py-2 px-4 text-xl font-lexend m-3 border-2 border-black hover:bg-acm-blue hover:text-white hover:border-acm-blue">
          Submit
        </button>
      </form>
      <div
        className={`${
          !showSnackBar ? "hidden" : "visible"
        } z-50 bg-black/60 text-white text-center p-2 fixed bottom-[30px] left-1/2 -translate-x-1/2 text-xl`}
      >
        {message}
      </div>
    </div>
  );
}
