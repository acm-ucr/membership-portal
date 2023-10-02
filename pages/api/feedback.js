import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function feedback(req, res) {
  const { id, feedback } = req.body;
  const session = await getServerSession(req, res, authOptions);

  if (session.user && session.user.role.includes("admin")) {
    try {
      await updateDoc(doc(db, "users", id), {
        "resume.updated": "",
        "resume.reviewed": new Date(),
        "resume.feedback": feedback,
      });
      res.status(200).json();
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}
