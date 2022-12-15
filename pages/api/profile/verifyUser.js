import { db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function getProfileInfo(req, res) {
  const docSnap = await getDoc(doc(db, "users", req.body.email));

  if (docSnap.exists()) {
    console.log("exists");
    res.status(200).json({});
  }

  res.status(400).json({});
}
