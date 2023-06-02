import React, { useEffect, useState } from "react";
const PDFViewer = ({ pdf }) => {
  const [validPDF, setValidPDF] = useState(true);
  const [newPDFLink, setNewPDFLink] = useState("");

  const [showSnackBar, setShowSnackBar] = useState(false);
  const [message, setMessage] = useState("");
  const snackBar = (mes) => {
    setMessage(mes);
    setShowSnackBar(true);
    setTimeout(() => {
      setShowSnackBar(false);
      setMessage("");
    }, 3000);
  };

  useEffect(() => {
    if (pdf) {
      if (pdf.endsWith(".pdf")) {
        setValidPDF(true);
        setNewPDFLink(pdf ? pdf + "#toolbar=0&navpanes=0&scrollbar=0" : "");
      } else {
        setValidPDF(false);
        snackBar(
          "Failed to upload your resume! Please make sure your resume is in PDF format"
        );
      }
    }
  }, [pdf]);

  return (
    <div className="h-full w-full">
      {newPDFLink ? (
        <iframe src={newPDFLink} height="100%" width="100%" />
      ) : (
        <div className="flex h-full items-center justify-center">
          <p className="font-lexend text-3xl font-semibold">
            no resume uploaded
          </p>
        </div>
      )}
      {!validPDF ? (
        <div
          className={`${
            !showSnackBar ? "hidden" : "visible"
          } z-50 bg-black/60 text-white text-center p-2 fixed bottom-[30px] left-1/2 -translate-x-1/2 text-xl`}
        >
          {message}
        </div>
      ) : null}
    </div>
  );
};

export default PDFViewer;
