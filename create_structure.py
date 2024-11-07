import os

# Define the project directory
project_dir = "/Users/dietzer/vsc/Current-Glimpse"

# Define folder structure and files
structure = {
    "backend/config": ["dbConfig.js"],
    "backend/controllers": ["articleController.js", "verificationController.js"],
    "backend/models": ["Article.js", "User.js", "Verification.js"],
    "backend/routes": ["articleRoutes.js", "verificationRoutes.js"],
    "backend/services": ["blockchainService.js", "verificationService.js"],
    "backend/utils": ["helpers.js"],
    "backend": ["app.js", "server.js", ".env"],
    "client/public": ["index.html", "manifest.json"],
    "client/src/assets/images": [],
    "client/src/components/Badge": ["Badge.js", "Badge.css"],
    "client/src/components/Article": ["Article.js", "Article.css"],
    "client/src/components/Header": ["Header.js", "Header.css"],
    "client/src/components/Footer": ["Footer.js", "Footer.css"],
    "client/src/components/NewsList": ["NewsList.js", "NewsList.css"],
    "client/src/components/UndoMessage": ["UndoMessage.js", "UndoMessage.css"],
    "client/src/contexts": ["ArticleContext.js", "VerificationContext.js"],
    "client/src/pages": ["Home.js", "ArticlePage.js", "CategoryPage.js"],
    "client/src/services": ["articleService.js", "verificationService.js"],
    "client/src/styles": ["global.css", "variables.css"],
    "client/src": ["App.js", "index.js", "config.js"]
}

# Template content for essential files
templates = {
    "backend/app.js": """
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

// Database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Database connected'))
.catch(err => console.error('Database connection error:', err));

module.exports = app;
""",
    "backend/server.js": """
const app = require('./app');
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
""",
    "client/src/App.js": """
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
""",
    "client/src/index.js": """
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
""",
    "backend/.env": """
PORT=5000
MONGO_URI=your_mongo_database_uri
"""
}

# Create directories and files
for path, files in structure.items():
    # Create the directory
    full_path = os.path.join(project_dir, path)
    print(f"Creating directory: {full_path}")
    os.makedirs(full_path, exist_ok=True)  # Ensure each directory is created

    # Create each file in the directory
    for file in files:
        file_path = os.path.join(full_path, file)
        print(f"Creating file: {file_path}")
        try:
            with open(file_path, 'w') as f:
                # Write template content if available
                content = templates.get(f"{path}/{file}", "")
                f.write(content)
        except Exception as e:
            print(f"Failed to create {file_path}: {e}")

print("Project structure created successfully!")