import React, { useState } from "react";
const PDFViewer = ({ pdf }) => {
  const newPDFLink = pdf ? pdf + "#toolbar=0&navpanes=0&scrollbar=0" : "";
  const [validPDF, setValidPDF] = useState(true);
  if (!validPDF) {
    setValidPDF(true);
  }
  return (
    <div className="h-full w-full">
      {validPDF ? <iframe src={newPDFLink} height="100%" width="100%" /> : "no"}
    </div>
  );
};

export default PDFViewer;
