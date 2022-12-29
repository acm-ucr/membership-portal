import { db } from "../../../firebase";
import { doc, updateDoc } from "firebase/firestore";

export default async function setProfileInfo(req, res) {
  const docRef = doc(db, "users", req.body.email);

  await updateDoc(docRef, {
    name: req.body.name,
    major: req.body.major,
    year: req.body.year,
  });
}
