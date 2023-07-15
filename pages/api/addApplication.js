import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

export default async function handler(req, res) {
  try {
    await updateDoc(doc(db, "users", req.body.id), {
      major: req.body.major,
      year: req.body.year,
      response: req.body.response,
      verified: false,
      feedback: "",
      points: 0,
      role: "member",
      resume: "",
    });
    res.status(200).json({});
  } catch (error) {
    console.log(error);
    res.status(500).json({});
  }
}
