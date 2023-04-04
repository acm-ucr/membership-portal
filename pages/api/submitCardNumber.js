import { google } from "googleapis";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default async function submitCardNumber(req, res) {
  const fs = require("fs");
  const path = "./GoogleSheetCredential.json";

  if (!fs.existsSync(path)) {
    fs.writeFile(
      "./GoogleSheetCredential.json",
      process.env.NEXT_PUBLIC_CREDS,
      (err) => {
        console.log(err);
      }
    );
  }
  const row = req.body.rowNum;
  const uid = req.body.uid;
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });
  if (row == 0) {
    const appendResponse = await sheets.spreadsheets.values
      .append({
        spreadsheetId: req.body.sheetID,
        range: "CardAccess!A1",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          majorDimension: "ROWS",
          values: [[req.body.name, req.body.email, req.body.cardNumber]],
        },
      })
      .catch((error) => {
        console.log(error);
      });
    const range = appendResponse.data.updates?.updatedRange.split("!")[1];
    const index = parseInt(range[1]);
    await updateDoc(doc(db, "users", uid), {
      row: index,
    })
      .then(() => {
        res.status(200).json(index);
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    await sheets.spreadsheets.values
      .update({
        spreadsheetId: req.body.sheetID,
        range: `CardAccess!A${row}`,

        valueInputOption: "USER_ENTERED",
        requestBody: {
          majorDimension: "ROWS",
          values: [[req.body.name, req.body.email, req.body.cardNumber]],
        },
      })
      .then(() => {
        res.status(200).json(row);
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
