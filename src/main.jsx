import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/main/global.css";
import "./assets/styles/main/design_system.css";
import Loader from "./app/components/Loader.jsx";
import { DarkModeProvider } from "./app/Context/Dark_Mode_Provider.jsx";

// Loader
const loadingMarkup = <Loader />;
ReactDOM.createRoot(document.getElementById("root")).render(
    <Suspense fallback={loadingMarkup}>
        <React.StrictMode>
                <DarkModeProvider>
                        <App />
                </DarkModeProvider>
        </React.StrictMode>
    </Suspense>
);
