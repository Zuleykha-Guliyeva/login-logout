import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import AuthProtectedComponent from "./protected/auth-protected.component";
import NotfoundComponent from "../pages/not-found/notfound.component";
import AuthComponent from "../core/layouts/auth/auth.component";
import UserDetailComponent from "../pages/user-detail/userdetail.component";
import LoginComponent from "../pages/login/login.component";
import PublicComponent from "../core/layouts/public/public.component";
import SignupComponent from "../pages/signup/singup.component";

const router = createBrowserRouter([
  {
    element: (
      <AuthProtectedComponent layout="public">
        <PublicComponent />
      </AuthProtectedComponent>
    ),
    children: [
      {
        path: Routes.userdetails,
        element: <UserDetailComponent />,
      },
      {
        path: "*",
        element: <NotfoundComponent />,
      },
    ],
  },
  {
    path: Routes.auth,
    element: (
      <AuthProtectedComponent layout="auth">
        <AuthComponent />
      </AuthProtectedComponent>
    ),
    children: [
      {
        path: Routes.login,
        element: <LoginComponent />,
      },
      {
        path: Routes.signup,
        element: <SignupComponent />,
      },
    ],
  },
]);

export default router;
