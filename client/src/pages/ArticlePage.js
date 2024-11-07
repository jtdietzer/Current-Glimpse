import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Badge from '../components/Badge/Badge';

function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [verification, setVerification] = useState(null); // Ensure this state is defined

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const articleResponse = await axios.get(`/api/articles/${id}`);
        setArticle(articleResponse.data);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    const fetchVerification = async () => {
      try {
        const verificationResponse = await axios.get(`/api/verification/${id}`);
        setVerification(verificationResponse.data); // Store the verification data
      } catch (error) {
        console.error('Error fetching verification status:', error);
      }
    };

    fetchArticle();
    fetchVerification();
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p><strong>Author:</strong> {article.author}</p>
      <p><strong>Content:</strong> {article.content}</p>
      <p>
        <strong>Verification Status:</strong>{' '}
        {verification ? <Badge status={verification.status} /> : 'Loading...'}
      </p>
    </div>
  );
}

export default ArticlePage;