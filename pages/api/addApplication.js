import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

export default async function handler(req, res) {
  try {
    await setDoc(doc(db, "applications", req.body.uid), {
      name: req.body.name,
      email: req.body.email,
      major: req.body.major,
      year: req.body.year,
      response: req.body.response,
    });
    res.status(200).json({});
  } catch (error) {
    console.log(error);
    res.status(500).json({});
  }
}
