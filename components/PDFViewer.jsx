import React from "react";

const PDFViewer = ({ pdf }) => {
  const newPDFLink = pdf ? pdf + "#toolbar=0&navpanes=0&scrollbar=0" : "";
  return (
    <div className="h-full w-full">
      <iframe src={newPDFLink} height="100%" width="100%" />
    </div>
  );
};

export default PDFViewer;
