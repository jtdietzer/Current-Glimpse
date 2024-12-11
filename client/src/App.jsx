// React and React Router imports
import React, { Lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Error boundary and fallback
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";

// Pages
import HomePage from "./pages/Home/Home";
import ArticlePage from "./pages/ArticlePage/ArticlePage";

// Styles
import "./styles/global.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            window.location.reload();
            // Logic to reset app state or fetch data again
            console.log("Resetting error state...");
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/article/:id" element={<ArticlePage />} />
          </Routes>
          <Footer />
        </ErrorBoundary>
      </Router>
    </div>
  );
};

export default App;
