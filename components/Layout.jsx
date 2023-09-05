import Navigation from "./Navigation";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <>
      <Toaster />
      <Navigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;
