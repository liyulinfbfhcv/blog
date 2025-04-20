import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App/App.jsx";
import "./styles/index.css";
import Index from "./components/index/index.jsx";
import Home from "./components/home/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Index />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
