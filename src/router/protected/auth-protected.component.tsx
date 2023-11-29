import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Routes } from "../routes";
import { IAuthProtectedRouteProps } from "./auth-protected";
import { useEffect } from "react";
import { getToken } from "../../core/helpers/get-token";
import { setUser } from "../../store/store.reducer";
// import { environment } from "../../core/configs/app.config";
const AuthProtectedComponent = ({
  children,
  layout = "public",
}: IAuthProtectedRouteProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getToken();
    // localStorage.removeItem(`${environment.applicationName}-token`);
    if (token) {
      dispatch(setUser(token));
    }
  }, []);
  switch (layout) {
    case "auth":
      return getToken() ? <Navigate to={Routes.userdetails} replace /> : children;
    case "public":
      return getToken() ? children : <Navigate to={Routes.login} replace />;
    default:
      return children;
  }
};

export default AuthProtectedComponent;


