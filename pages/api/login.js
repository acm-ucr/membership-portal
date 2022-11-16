import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default async function handler(req, res) {
  signInWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then((userCredential) => {
      console.log(userCredential);
      res.json(200);
    })
    .catch((error) => {
      console.log(error);
      res.json(500);
    });
}
