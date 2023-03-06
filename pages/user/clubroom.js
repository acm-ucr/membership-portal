import { onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";
import CardAccess from "../../components/CardAccess";
import { auth } from "../../firebase";
import axios from "axios";

const ClubroomPage = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, async (currentState) => {
      if (currentState !== null) {
        console.log(currentState.photoURL);
        const response = await axios.post("/api/profile/getInfo", {
          uid: currentState.uid,
        });
        if (response.status === 200) {
          setData({
            ...response.data,
            photoURL: currentState.photoURL,
            email: currentState.email,
            name: currentState.displayName,
            uid: currentState.uid,
          });
          // console.log(response.data);
        }
      }
    });
  }, []);
  return <CardAccess email={data.email} name={data.name} />;
};
export default ClubroomPage;
