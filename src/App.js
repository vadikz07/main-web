import React from "react";
import ReactDOM from "react-dom/client"
import { createHashRouter, RouterProvider } from "react-router-dom";
import UtilsPage from './pages/UtilsPage'

const router = createHashRouter([
  {
    path: "/*",
    element: <UtilsPage />
  }
])

