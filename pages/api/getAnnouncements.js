import { query, orderBy, limit } from "firebase/firestore";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";

export default async function getAnnouncements(req, res) {
  const annouoncments = [];

  const q = query(
    collection(db, "announcement"),
    orderBy("time", "desc"),
    limit(5)
  );

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    annouoncments.push({
      title: doc.id,
      data: doc.data(),
    });
  });
  res.status(200).json(annouoncments);
}
