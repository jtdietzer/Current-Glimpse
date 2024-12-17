// React import
import React from "react";

// Styles
import './TopStories.css';

const TopStories = () => {
  return (
    <div className="topStoriesComponent">
      <div className="topStoriesItem large">
        <img src="/assets/images/stock.jpg" alt="Fashion" />
        <div className="topStoriesInfo">
          {/* <span className="category">Fashion</span> */}
          <h3>WordPress News Magazine Charts the Most Chic and Fashionable Women of New York City</h3>
          <p>Jacob Dietzer • August 7, 2019</p>
        </div>
      </div>
        <div className="topStoriesItem medium">
          <img src="/assets/images/stock.jpg" alt="Gadgets" />
          <div className="topStoriesInfo">
            <span className="category">Gadgets</span>
            <h3>Game Changing Virtual Reality Console Hits the Market</h3>
          </div>
        </div>
          <div className="topStoriesItem small small-left">
            <img src="/assets/images/stock.jpg" alt="Travel" />
            <div className="topStoriesInfo">
              <span className="category">Travel</span>
              <h3>Discover the Most Magical Sunset in Santorini</h3>
            </div>
          </div>
          <div className="topStoriesItem small small-right">
            <img src="/assets/images/stock.jpg" alt="Reviews" />
            <div className="topStoriesInfo">
              <span className="category">Reviews</span>
              <h3>Computer Filters Noise to Make You a Better Listener</h3>
            </div>
          </div>
    </div>
  );
};

export default TopStories;