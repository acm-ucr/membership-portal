import React from "react";

const PDFViewer = ({ pdf }) => {
  return (
    <div className="h-full w-full">
      <iframe src={pdf} height="100%" width="100%" />
    </div>
  );
};

export default PDFViewer;
