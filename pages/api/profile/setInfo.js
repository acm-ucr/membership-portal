import { db } from "../../../firebase";
import { doc, updateDoc } from "firebase/firestore";

export default async function setProfileInfo(data) {
  const payload = {
    name: data.body.data.name,
    major: data.body.data.major,
    year: data.body.data.year,
  };
  const docRef = doc(db, "users", "scott001"); // data.body.data.netId
  await updateDoc(docRef, payload);
}
