import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";

export default async function setProfileInfo(req, res) {
  const docRef = doc(db, "users", req.body.uid);

  await updateDoc(docRef, {
    major: req.body.major,
    year: req.body.year,
  });
  res.status(200).json();
}
