import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./router/router.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
