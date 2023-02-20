import { google } from "googleapis";

export default async function submitCardNumber(req, res) {
  try {
    console.log("submitcardnumber called");
    console.log(req.body);
    const auth = await google.auth.getClient({
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheets = google.sheets({ version: "v4", auth });
    const response = await sheets.spreadsheets.developerMetadata
      .search({
        spreadsheetId: req.body.sheetID,
        requestBody: {
          dataFilters: [
            {
              developerMetadataLookup: {
                locationType: "ROW",
                metadataKey: req.body.email,
              },
            },
          ],
        },
      })
      .catch((error) => {
        console.log("developerMetadata error");
      });
    console.log("finish developmentmata");
    if (response.data.matchedDeveloperMetadata) {
      // There is a row with that id already present.
      console.log("find mata data");
      const { endIndex } =
        response.data.matchedDeveloperMetadata[0].developerMetadata.location
          .dimensionRange;
      // Use endIndex to create the range to update the values range: `SheetName!A${endIndex}`,
      await sheets.spreadsheets.values
        .update({
          spreadsheetId: req.body.sheetID,
          range: `CardAccess!A${endIndex}`,
          valueInputOption: "USER_ENTERED",
          requestBody: {
            majorDimension: "ROWS",
            values: [[req.body.name, req.body.email, req.body.cardNumber]],
          },
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("no find mata data");
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
      console.log("finish append");
      if (appendResponse.data.updates?.updatedRange) {
        const updatedRange = appendResponse.data.updates?.updatedRange;
        const range = updatedRange.split("!")[1];
        const index = parseInt(range[1]);
        console.log(req.body.email);
        console.log(index);
        await sheets.spreadsheets
          .batchUpdate({
            spreadsheetId: req.body.sheetID,
            requestBody: {
              requests: [
                {
                  createDeveloperMetadata: {
                    developerMetadata: {
                      location: {
                        dimensionRange: {
                          sheetId: 0,
                          startIndex: index,
                          endIndex: index + 1,
                          dimension: "ROWS",
                        },
                      },
                      metadataKey: req.body.email,
                      metadataValue: req.body.email,
                      visibility: "DOCUMENT",
                    },
                  },
                },
              ],
            },
          })
          .catch((error) => {
            console.log(error);
          });
        console.log("finish update meta data");
      }
    }
    res.status(200).json({});
  } catch {
    (error) => {
      console.log(error);
      res.status(500).json({});
    };
  }
}
