// React import
import React from "react";

export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Oops! Something went wrong.</h1>
      <p style={styles.message}>
        We encountered an error while loading the page. Our team has been notified, but you can try the following steps:
      </p>
      <ul style={styles.suggestions}>
        <li>Refresh the page.</li>
        <li>Check your internet connection.</li>
        <li>Contact support if the issue persists.</li>
      </ul>
      <p style={styles.errorDetails}>Error Details: {error?.message || "Unknown error"}</p>
      <button style={styles.button} onClick={resetErrorBoundary}>
        Retry
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
    backgroundColor: "#f8f9fa",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    margin: "2rem auto",
    maxWidth: "600px",
    fontFamily: "'Arial', sans-serif",
  },
  header: {
    color: "#dc3545",
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  message: {
    color: "#333",
    fontSize: "1rem",
    marginBottom: "1rem",
  },
  suggestions: {
    listStyle: "disc",
    textAlign: "left",
    margin: "0 auto 1rem",
    padding: "0 1.5rem",
    color: "#555",
  },
  errorDetails: {
    color: "#6c757d",
    fontSize: "0.9rem",
    marginBottom: "1rem",
  },
  button: {
    padding: "0.5rem 1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};