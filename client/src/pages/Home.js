import React, { useEffect, useState } from 'react';
import apiClient from '../services/api';

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    apiClient.get('/api/news')
      .then(response => setArticles(response.data))
      .catch(error => console.error("Error fetching news:", error));
  }, []);

  return (
    <div>
      <h1>News Articles</h1>
      {articles.map(article => (
        <div key={article._id}>
          <h2>{article.title}</h2>
          <h2>hello</h2>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;