
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
import { AuthProvider } from "./contexts/AuthContext";

import "./index.css";


createRoot(document.getElementById("root") as HTMLElement).render(
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
 
);