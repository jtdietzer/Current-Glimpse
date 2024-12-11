// React and React Router imports
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Styles
import './ArticlePage.css';

const ArticlePage = () => {
  const { id } = useParams(); // Get the article ID from the URL
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate fetching article data
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        setError(null);
        // Simulated API request
        const response = await fetch(`/api/articles/${id}`);
        if (!response.ok) {
          throw new Error('Article not found');
        }
        const data = await response.json();
        setArticle(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return <div className="loader">Loading...</div>; // Reuse your loader here
  }

  if (error) {
    return (
      <div className="error">
        <p>{error}</p>
        <button onClick={() => navigate('/')}>Go Back to Homepage</button>
      </div>
    );
  }

  if (!article) {
    return null;
  }

  return (
    <div className="article-page">
      <header className="article-header">
        <h1>{article.title}</h1>
        <p className="metadata">
          By <span>{article.author}</span> | Published on{' '}
          <span>{new Date(article.date).toLocaleDateString()}</span> | Source: <span>{article.source}</span>
        </p>
      </header>
      <main className="article-content">
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="article-image"
          />
        )}
        <p>{article.content}</p>
      </main>
      <footer className="article-footer">
        <button onClick={() => navigate(-1)}>Back to Previous Page</button>
      </footer>
    </div>
  );
};

export default ArticlePage;