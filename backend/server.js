const express = require('express');
const path = require('path'); // For serving static files
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Backend API Routes
app.get('/api', (req, res) => res.send('API is running...'));

// Serve React Frontend (for production)
if (process.env.NODE_ENV === 'production') {
  const buildPath = path.join(__dirname, 'client', 'build');
  
  // Serve static files
  app.use(express.static(buildPath));
  
  // Catch-all route to serve React's index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
}

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));