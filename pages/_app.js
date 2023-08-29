import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { SessionProvider } from "next-auth/react";
import PortalContext from "../components/PortalContext";
import {
  colorMappings,
  colorMappingsText,
  colorMappingsBorder,
} from "../components/data/CalendarColors";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [resources, setResources] = useState([]);
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

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
        const calendarEvents = response.data.items
          .filter((a) => {
            if (a.description) {
              a.start = new Date(a.start.dateTime);
              a.end = new Date(a.end.dateTime);
              a.color =
                colorMappings[
                  `${a.description
                    .split(" ")[0]
                    .toLowerCase()
                    .replace(":", "")}`
                ];

              a.textColor =
                colorMappingsText[
                  `${a.description
                    .split(" ")[0]
                    .toLowerCase()
                    .replace(":", "")}`
                ];

              a.border =
                colorMappingsBorder[
                  `${a.description
                    .split(" ")[0]
                    .toLowerCase()
                    .replace(":", "")}`
                ];

              return (
                a.description.startsWith("General:") ||
                a.description.startsWith("Technical:") ||
                a.description.startsWith("Social:") ||
                a.description.startsWith("Career:") ||
                a.description.startsWith("Academic:")
              );
            }
          })
          .sort((a, b) => {
            return new Date(a.start) - new Date(b.start);
          });
        setEvents(calendarEvents);

        const futureEvents = calendarEvents.filter(
          (event) => event.start > new Date()
        );
        setAnnouncements(futureEvents.slice(0, 5));
      })
      .catch((error) => {
        console.log(error);
      });
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser !== null) {
        axios
          .post("/api/getInfo", { uid: currentUser.uid })
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
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <PortalContext.Provider
        value={{
          resources,
          setResources,
          events,
          setEvents,
          announcements,
          setAnnouncements,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PortalContext.Provider>
    </SessionProvider>
  );
}

export default MyApp;
