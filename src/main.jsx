import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProfider from "./Context/AuthProfider";
import ContextProvider from "./Context/ContextProvider";
import "./index.css";
import router from "./routes/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <AuthProfider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProfider>
    </ContextProvider>
  </StrictMode>
);
