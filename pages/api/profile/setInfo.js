import { db } from "../../../firebase";
import { doc, updateDoc } from "firebase/firestore";

export default async function setProfileInfo(req, res) {
  const payload = {
    name: req.body.name,
    major: req.body.major,
    year: req.body.year,
  };
  try {
    await updateDoc(doc(db, "users", req.body.email), payload);
    res.status(200).json({});
  } catch {
    res.status(500).json({});
  }
}
