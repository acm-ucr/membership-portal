import { db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function getProfileInfo(req, res) {
  const docRef = doc(db, "users", "scott001");
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    console.log("User doesn't exist");
  }

  res.json(docSnap.data());
}
