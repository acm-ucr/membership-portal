import { google } from "googleapis";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import creds from "../../credentials";

export default async function submitCardNumber(req, res) {
  const row = req.body.rowNum;
  const uid = req.body.uid;
  const auth = await google.auth.getClient({
    credentials: creds,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  console.log("SHEETS", sheets);
  console.log("ROW", row);
  if (row == 0) {
    const appendResponse = await sheets.spreadsheets.values.append({
      spreadsheetId: req.body.sheetID,
      range: "CardAccess!A1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        majorDimension: "ROWS",
        values: [[req.body.name, req.body.email, req.body.cardNumber]],
      },
    });
    console.log("APPEND RESPONSE", appendResponse);
    console.log("APPEND RESPONSE DATA", appendResponse.data);
    const range = appendResponse.data.updates?.updatedRange.split("!")[1];
    console.log("RANGE", range);
    const index = parseInt(range[1]);
    try {
      await updateDoc(doc(db, "users", uid), {
        row: index,
      });
      res.status(200).json(index);
    } catch {
      res.status(500).json(0);
    }
  } else {
    const response = await sheets.spreadsheets.values.update({
      spreadsheetId: req.body.sheetID,
      range: `CardAccess!A${row}`,

      valueInputOption: "USER_ENTERED",
      requestBody: {
        majorDimension: "ROWS",
        values: [[req.body.name, req.body.email, req.body.cardNumber]],
      },
    });
    if (response.status === 200) {
      res.status(200).json(row);
      return;
    } else {
      res.status(500).json();
    }
  }
}
