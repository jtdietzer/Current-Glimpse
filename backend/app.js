require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/dbConfig');

const app = express();
connectDB();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
}));

// Routes (example placeholders)
app.use('/api/articles', require('./routes/articleRoutes'));
app.use('/api/news', require('./routes/newsRoutes'));

// Error handling
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;