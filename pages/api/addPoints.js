import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from "../../firebase";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function addPoints(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (session.user && session.user.role.includes("admin")) {
    try {
      await updateDoc(doc(db, "users", req.body.result), {
        points: increment(req.body.points),
      });
      res.status(200).json({});
    } catch {
      res.status(500).json({});
    }
  }
}
