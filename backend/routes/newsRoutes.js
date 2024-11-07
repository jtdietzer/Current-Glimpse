// backend/routes/newsRoutes.js
const express = require('express');
const router = express.Router();

// Sample route for fetching news articles
router.get('/', (req, res) => {
  // Here, you would fetch news data from a database or external API
  res.json([{ title: "Sample News 1" }, { title: "Sample News 2" }]);
  router.get('/', (req, res) => {
    console.log("GET /api/news request received");
    res.json([{ title: "Sample News 1" }]);
  });
});

module.exports = router;