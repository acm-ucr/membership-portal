import { createContext } from "react";

const RoleContext = createContext({
  role: "TESTING",
  setRole: () => {},
});

export default RoleContext;
