// React import
import React from 'react';

// components
import TopStories from '../../components/TopStories/TopStories';
import MostPopular from '../../components/MostPopular/MostPopular';
import Stories4U from '../../components/Stories4U/Stories4U';

// styles
import './Home.css';
import '../../App.css';
// import NewsList from '../components/NewsList/NewsList';

const Home = () => {
  return (
    <div className='homeComponent'>
        <TopStories />
        <MostPopular />
        <Stories4U />
      {/* <h1>Welcome to Current Glimpse</h1> */}
      {/* <NewsList /> */}
    </div>
  );
};

export default Home;