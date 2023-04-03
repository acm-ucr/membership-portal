// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getDocs, collection, where } from "firebase/firestore";
import { db } from "../../firebase";
import { Timestamp, query } from "firebase/firestore";

export default async function getAllResources(req, res) {
  const resources = [];
  const currentDate = Timestamp.now();
  console.log("currentDate", currentDate);

  const q = query(
    collection(db, "resources"),
    where("time", "<", Timestamp.now())
  );
  const results = await getDocs(q);
  results.forEach((doc) => {
    console.log(doc.data().time, doc.data().time < Timestamp.now());
    resources.push({
      title: doc.id,
      data: doc.data(),
    });
  });
  res.status(200).json(resources);
}
