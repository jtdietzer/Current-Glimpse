/**
 * newsController.js
 * 
 * Purpose:
 * - Handles logic for fetching, filtering, and displaying news articles.
 * - Connects with models or external APIs to retrieve data.
 */

const Article = require('../models/Article');

/**
 * Fetch all articles
 */
const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Fetch a single article by ID
 */
const getArticleById = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findByPk(id);
    if (!article) return res.status(404).json({ message: 'Article not found' });
    res.json(article);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllArticles, getArticleById };