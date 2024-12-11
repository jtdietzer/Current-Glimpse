/**
 * articleController.js
 * 
 * Purpose:
 * - Handles all logic related to articles, including fetching, creating, updating,
 *   and deleting articles.
 */

const getAllArticles = (req, res) => {
    res.json({ message: 'List of all articles' });
  };
  
  const getArticleById = (req, res) => {
    const { id } = req.params;
    res.json({ message: `Details of article with ID: ${id}` });
  };
  
  module.exports = { getAllArticles, getArticleById };