import useProtectedRoutePolicy from "./ProtectedRoutedHook";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, setUser } = useProtectedRoutePolicy();
  const location = useLocation();
  if (user.username === "guest" && user.role === "guest") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};
export default ProtectedRoute;
