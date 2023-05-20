import React, { useState } from "react";
const PDFViewer = ({ pdf }) => {
  const [validPDF, setValidPDF] = useState(true);
  if (!validPDF) {
    setValidPDF(true);
  }
  return (
    <div className="h-full w-full">
      {validPDF ? <iframe src={pdf} height="100%" width="100%" /> : "no"}
    </div>
  );
};

export default PDFViewer;
