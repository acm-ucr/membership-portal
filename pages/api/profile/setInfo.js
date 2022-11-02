import { db } from "../../../firebase";
import { doc, setDoc } from "firebase/firestore";

export default async function setProfileInfo(data) {
  const payload = {
    name: data.body.data.name,
    major: data.body.data.major,
    year: data.body.data.year,
  };
  const docRef = doc(db, "users", "scott001");
  await setDoc(docRef, payload);
}
