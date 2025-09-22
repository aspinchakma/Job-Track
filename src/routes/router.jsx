import { createBrowserRouter } from "react-router-dom";
import ComapnyDetails from "../components/ComapnyDetails";
import Error from "../components/Error";
import Login from "../components/Login";
import MainHome from "../components/MainHome";
import Profile from "../components/Profile";
import Register from "../components/Register";
import Reset from "../components/Reset";
import MainLayout from "../Layout/MainLayout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <MainHome />,
      },
      {
        path: "/company/:id",
        element: (
          <PrivateRoute>
            <ComapnyDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "resetpassword",
        element: <Reset />,
      },
    ],
  },
]);

export default router;
