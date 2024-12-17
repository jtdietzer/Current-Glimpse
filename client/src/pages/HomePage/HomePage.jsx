// React import
import React from 'react';

// Components
import TopStories from '../../components/TopStories/TopStories';
import MostPopular from '../../components/MostPopular/MostPopular';
import Stories4U from '../../components/Stories4U/Stories4U';
import ForYou from '../../components/ForYou/ForYou';

// Styles
import './HomePage.css';
import '../../App.css';
// import NewsList from '../components/NewsList/NewsList';

const HomePage = () => {
  return (
    <div className='homeComponent'>
        {/* <TopStories /> */}
        <ForYou />
        {/* <MostPopular />
        <Stories4U /> */}
      {/* <h1>Welcome to Current Glimpse</h1> */}
      {/* <NewsList /> */}
    </div>
  );
};

export default HomePage;