// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default async function handler(req, res) {
  // Add a new document in collection "cities"
  try {
    await setDoc(doc(db, "cities", "SF"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    });
  } catch {
    alert("fail");
    res.json(500);
  }

  res.json(200);
}
