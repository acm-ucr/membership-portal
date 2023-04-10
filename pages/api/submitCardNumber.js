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
    const range = appendResponse.data.updates?.updatedRange.split("!")[1];
    const index = parseInt(range[1]);
    const response = await updateDoc(doc(db, "users", uid), {
      row: index,
    });
    if (response.status === 200) {
      res.status(200).json(index);
      return;
    }
    res.status(500).json(0);
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
