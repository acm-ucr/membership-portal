import { db } from "../../firebase";
import { getDocs, query, where, collection } from "firebase/firestore";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function resume(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (session.user && session.user.role.includes("admin")) {
    const resumes = [];
    try {
      const snapshot = await getDocs(
        query(
          collection(db, "users"),
          where("resume.reviewed", "==", ""),
          where("resume.feedback", "==", "")
        )
      );

      snapshot.forEach((doc) => {
        const { name, resume } = doc.data();
        if (resume.link !== "") {
          resumes.push({
            id: doc.id,
            name: name,
            link: resume.link,
            updated: resume.updated,
            reviewed: "",
            feedback: "",
          });
        }
      });
      res.status(200).json(resumes);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}
