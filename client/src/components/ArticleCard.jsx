// Displays article cards
import React from 'react';

const ArticleCard = ({ title, content, status }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <span>Status: {status}</span>
        </div>
    );
};

export default ArticleCard;
