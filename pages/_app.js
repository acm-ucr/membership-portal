import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import UserContext from "../components/UserContext";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("APP FILE", user);
    console.log("USEFFECT CALLED");
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser !== null) {
        axios
          .post("/api/profile/getInfo", { uid: currentUser.uid })
          .then((response) => {
            const data = response.data.data;
            const date = new Date(data.start.seconds * 1000);
            data.start = date.getFullYear();
            setUser({
              ...response.data.data,
              name: currentUser.displayName,
              uid: currentUser.uid,
              email: currentUser.email,
            });
          });
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
  );
}

export default MyApp;
