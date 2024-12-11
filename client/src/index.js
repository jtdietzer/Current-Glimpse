// React and React-Dom Client imports
import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

// Error boundary
import ErrorBoundary from './components/ErrorBoundary';

// Components
import Header from './components/Header/Header'; // Import your Header component

// Styles
import './styles/loader.css'; // Include the loader styles

// Lazy load the App component
const App = React.lazy(() => import('./App'));

// Select the root DOM element
const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Root element not found. Make sure you have a <div id='root'></div> in your HTML.");
}

const root = createRoot(rootElement);

// Define the loader fallback
const Loader = () => (
    <div>
        <Header /> {/* Render the Header during loading */}
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'calc(100vh - 60px)', // Adjust height to exclude the header
                marginTop: '60px', // Match the height of your header
            }}
        >
            <div className="loader"></div>
        </div>
    </div>
);

// Render the App with the fallback loader
root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <Suspense fallback={<Loader />}>
                <App />
            </Suspense>
        </ErrorBoundary>
    </React.StrictMode>
);