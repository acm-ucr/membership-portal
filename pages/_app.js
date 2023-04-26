import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import PortalContext from "../components/PortalContext";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [resources, setResources] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("/api/getAllResources")
      .then((response) => {
        setResources(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}`
      )
      .then((response) => {
        setEvents(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
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
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }, []);

  return (
    <PortalContext.Provider
      value={{ resources, setResources, user, setUser, events, setEvents }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PortalContext.Provider>
  );
}

export default MyApp;
