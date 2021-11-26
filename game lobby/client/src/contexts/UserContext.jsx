import { createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ authState, playerColor }}>
      {children}
    </UserContext.Provider>
  );
};
