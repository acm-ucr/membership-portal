// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default async function handler(req, res) {
  try {
    await setDoc(doc(db, "cities", "SF"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    });
  } catch {
    alert("fail");
    res.status(500).json({});
  }

  res.status(200).json({});
}
