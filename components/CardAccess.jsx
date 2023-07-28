/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function CardAccess() {
  const [cardNumber, setCardNumber] = useState("");
  const { data: session } = useSession();

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
    if (cardNumber.length != 19) {
      snackBar(
        "The card ID should be 16 bits, please double check your card number😅"
      );
      return;
    }
    axios
      .post("/api/submitCardNumber", {
        name: session.user.name,
        email: session.user.email,
        rowNum: session.user.rowNum,
        cardNumber: cardNumber,
        uid: session.user.id,
      })
      .then(() => {
        snackBar("Succesfully added your card number! 🥳");
      })
      .catch((error) => {
        console.log(error);
        snackBar(
          "Failed to add your card! Try again or contact an ACM officer 😭"
        );
      });
  };
  return (
    <div className="h-auto flex w-11/12 flex-col mx-auto">
      <p className="text-xl lg:text-2xl font-lexend">
        In order to receive card access to our classroom, please enter the
        number at the bottom right of your R'Card:
      </p>
      <form onSubmit={handleSubmit} className=" flex items-center w-7/12">
        <input
          maxLength={19}
          autoComplete="off"
          className="w-10/12 lg:w-6/12 border-black border-2 rounded-lg py-2 px-4 text-xl font-lexend"
          value={cardNumber}
          placeholder="card number"
          onChange={handleChange}
        />
        <button className=" rounded-lg py-2 px-4 text-xl font-lexend m-3 border-2 border-black hover:bg-acm-blue hover:text-white hover:border-acm-blue">
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
