// React import
import React, { useState, useEffect } from "react";

// Styles
import './MostPopular.css';

const MostPopular = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 5;

  // Mock data for left section (5 articles)
  const articlesForLeft = Array.from({ length: 5 }, (_, i) => ({
    title: `Left Article ${i + 1}: Lorem ipsum dolor sit amet consectetur.`,
    source: "Lifestyle",
    readTime: `${3 + (i % 3)} min read`,
    img: "/assets/images/stock.jpg",
  }));

  // Mock data for right section (15 articles)
  const articlesForRight = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Right Article ${i + 1}: Lorem ipsum dolor sit amet consectetur.`,
    source: "USA Today",
    readTime: `${3 + (i % 3)} min read`,
    img: "/assets/images/stock.jpg",
  }));

  // Paginated articles for the right section
  const currentArticles = articlesForRight.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const changePage = (newPage) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(newPage);
    }, 300); // Short delay before switching pages
    setTimeout(() => {
      setIsLoading(false);
    }, 800); // Smooth transition completion
  };

  const totalPages = Math.ceil(articlesForRight.length / itemsPerPage);

  return (
    <div className="mostPopular">
      {/* Left Content */}
      {/* <div className="mostPopular-left-box">
        {articlesForLeft.map((article, index) => (
          <div className="mostPopular-left" key={index}>
            <div className="mostPopular-left-category">{article.source}</div>
            <img src={article.img} alt="stock" className="mostPopular-left-image" />
            <div className="mostPopular-left-info">
              <div className="mostPopular-left-headline">
                <h1>{article.title}</h1>
              </div>
              <div className="mostPopular-left-source-time-read">
                <div className="mostPopular-left-source">{article.source}</div>
                <div className="mostPopular-left-time-read">{article.readTime}</div>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      {/* Right Content */}
      <div className="mostPopular-right-box">
        <span>Most Popular</span>

        {isLoading
          ? Array.from({ length: itemsPerPage }).map((_, index) => (
              <div className="mostPopular-right skeleton skeleton-active" key={index}>
                <div className="skeleton-image"></div>
                <div className="mostPopular-right-info">
                  <div className="skeleton-title"></div>
                  <div className="skeleton-detail-line"></div>
                  {/* <div className="skeleton-detail-line"></div> */}
                </div>
              </div>
            ))
          : currentArticles.map((article) => (
              <div className="mostPopular-right" key={article.id}>
                <img src={article.img} alt="stock" className="mostPopular-right-image" />
                <div className="mostPopular-right-info">
                  <h3>
                    {article.id}. {article.title}
                  </h3>
                  <div className="mostPopular-right-details">
                    <p className="mostPopular-right-source">{article.source}</p>
                    <p className="mostPopular-right-readtime">{article.readTime}</p>
                  </div>
                </div>
              </div>
            ))}

        {/* Pagination */}
        <div className="pagination">
          <button
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1 || isLoading}
            className="arrow-button"
          >
            &lt;
          </button>
          <button
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages || isLoading}
            className="arrow-button"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default MostPopular;