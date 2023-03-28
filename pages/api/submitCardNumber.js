import { google } from "googleapis";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default async function submitCardNumber(req, res) {
  console.log("submitcardnumber called");
  console.log(req.body);
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
    console.log(req.body.uid);
    const range = appendResponse.data.updates?.updatedRange.split("!")[1];
    const index = parseInt(range[1]);
    await updateDoc(doc(db, "users", uid), {
      row: index,
    }).catch((error) => {
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
      .catch((error) => {
        console.log(error);
      });
  }
}
