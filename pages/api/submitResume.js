import { db } from "../../firebase";

export default async function submitResume(req, res) {
  try {
    await updateDoc(doc(db, "users", req.body.uid), {
      resume: req.body.resume,
    });
    console.log("resume submitted");
    res.status(200).json();
  } catch {
    res.status(500).json(0);
  }
}
