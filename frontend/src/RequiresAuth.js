import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

export const RequiresAuth = ({ children }) => {
  const location = useLocation();
  const { item } = useContext(AuthContext);
  return item ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
