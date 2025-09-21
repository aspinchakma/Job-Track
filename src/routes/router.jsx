import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ComapnyDetails from "../components/ComapnyDetails";
import Error from "../components/Error";
import Login from "../components/Login";
import MainHome from "../components/MainHome";
import Profile from "../components/Profile";
import Register from "../components/Register";
import Reset from "../components/Reset";

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
        element: <ComapnyDetails />,
      },
      {
        path: "profile",
        element: <Profile />,
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
