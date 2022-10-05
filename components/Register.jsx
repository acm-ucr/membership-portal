import React from "react";
import Image from "next/image";

const Register = () => {
  return (
    <div className="font-bold w-[45%] h-[60%] m-4">
      <container className=" bg-acm-blue rounded-[10%] grid">
        <div
          style={{ paddingTop: "12%" }}
          className="text-acm-black text-center font-bold"
        >
          <h3 style={{ fontSize: "3vw" }}>
            welcome! you are now <br></br>
            an official member of
          </h3>
        </div>

        <div className="bg-acm-black rounded-3xl w-3/4 mx-auto px-2.5">
          <Image
            layout="responsive"
            src="/acmucr.png"
            alt="acm logo"
            width={350}
            height={120}
          />
        </div>

        <div
          style={{ paddingTop: "2.5%", paddingBottom: "15%" }}
          className="text-center"
        >
          <button
            style={{
              alignSelf: "center",
              background: "gainsboro",
              fontSize: "2vw",
              padding: ".25%",
            }}
            className="text-black rounded-full w-[50%] h-[100%] text-1xl"
          >
            back to sign in
          </button>
        </div>
      </container>
    </div>
  );
};

export default Register;
