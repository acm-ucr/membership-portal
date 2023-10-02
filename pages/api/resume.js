import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function resume(req, res) {
  const { resume } = req.body;
  const session = await getServerSession(req, res, authOptions);

  if (session.user && session.user.role.includes("member")) {
    try {
      await updateDoc(doc(db, "users", session.user.id), {
        "resume.link": resume,
        "resume.updated": new Date(),
        "resume.reviewed": "",
        "resume.feedback": "",
      });
      res.status(200).json();
    } catch {
      res.status(500).json();
    }
  }
}
