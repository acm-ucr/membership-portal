import { onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";
import CardAccess from "../components/CardAccess";
import { auth } from "../firebase";
import axios from "axios";

const ClubroomPage = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, async (currentState) => {
      if (currentState !== null) {
        const response = await axios.post("/api/profile/getInfo", {
          uid: currentState.uid,
        });
        if (response.status === 200) {
          setData({
            ...response.data.data,
            photoURL: currentState.photoURL,
            email: currentState.email,
            name: currentState.displayName,
            uid: currentState.uid,
          });
        }
      }
    });
  }, []);
  return (
    <CardAccess
      email={data.email}
      name={data.name}
      rowNum={data.row}
      uid={data.uid}
    />
  );
};
export default ClubroomPage;
