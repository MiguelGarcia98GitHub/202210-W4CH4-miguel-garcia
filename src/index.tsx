import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RobotsContextProvider } from "./context/providerrobots";
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <RobotsContextProvider>
            <App />
        </RobotsContextProvider>
    </React.StrictMode>
);

reportWebVitals();
