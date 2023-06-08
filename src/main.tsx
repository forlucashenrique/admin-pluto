
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import App from "./App";
import "./index.css";
import {router} from "./routers";

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);