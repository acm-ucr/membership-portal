import React from "react";
import { db } from "../../firebase";

export default async function submitResume(req, res) {
  const uid = req.body.uid;
  try {
    await updateDoc(doc(db, "users", uid), {
      resume: req.body.resume,
    });
    res.status(200).json(index);
  } catch {
    res.status(500).json(0);
  }
  return <div>submitResume</div>;
}
