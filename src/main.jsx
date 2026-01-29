import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import { AuthProvider } from "./auth/AuthContext";

ModuleRegistry.registerModules([AllCommunityModule]);

const CLIENT_ID =
  "759600868917-sdifal21hi1cgr23r20r984sf3okejuf.apps.googleusercontent.com";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
);
