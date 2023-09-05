import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";

export default async function submitResume(req, res) {
  try {
    await updateDoc(doc(db, "users", req.body.uid), {
      resume: req.body.resume,
    });
    res.status(200).json();
  } catch {
    res.status(500).json(0);
  }
}
