import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ item: 0 }}>{children}</AuthContext.Provider>
  );
};
