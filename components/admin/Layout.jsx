import React from "react";
import Navigation from "./admin/Navigation";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      {children}
    </div>
  );
}

export default Layout;
