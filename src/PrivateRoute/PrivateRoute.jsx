import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/MixContext";
import Spinner from "../components/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (isLoading) {
    return <Spinner />;
  }
  if (!user) {
    return <Navigate state={location.pathname} to={`/login`}></Navigate>;
  }
  if (user) {
    return children;
  }
};

export default PrivateRoute;
