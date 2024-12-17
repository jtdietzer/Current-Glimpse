// React and React Router imports
import React, { Lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components


// Pages & Layout
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/Layout/Layout";
// import Category from "./pages/Category/Category";

// Styles
import "./styles/global.css";
import "./App.css";

// Error boundary and fallback
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import Loader from "./components/Loader/Loader";

const App = () => {
  return (
    <div className="App">
     <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<Loader />}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/:category" element={<Category />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Suspense>
    </ErrorBoundary>
    </div>
  );
};

export default App;
