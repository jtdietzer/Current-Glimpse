// React and ReactDOM imports
import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Components
import Loader from "./components/Loader/Loader";

// Lazy-loaded App
const App = React.lazy(() => import("./App"));

// Root element
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found. Ensure <div id='root'></div> is present in your HTML.");
}

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);