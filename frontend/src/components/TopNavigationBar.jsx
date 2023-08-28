import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import SearchBar from './SearchBar';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ favoritedCount, topicData, fetchTopicPhotos, resetTopicPhotos, search, setSearch, filteringMode }) => {
  // Define a function to handle the logo click
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (filteringMode === "topic") {
      resetTopicPhotos();
    } else if (filteringMode === "search") {
      // You should define resetSearchResults() function or update this logic accordingly
      // resetSearchResults();
    } else {          
      resetTopicPhotos();
    }
  };

  return (
    <div className="top-nav-bar">
      {/* Logo link */}
      <a className="top-nav-bar__logo" href="#" onClick={handleLogoClick}>
        PhotoLabs
      </a>
      {/* Display topic list */}
      <TopicList  
        topicData={topicData} 
        fetchTopicPhotos={fetchTopicPhotos}
      />
      {/* Display favorite badge */}
      <FavBadge isFavPhotoExist={favoritedCount > 0} />
      <SearchBar search={search} setSearch={setSearch} />
    </div>
  );
}

export default TopNavigationBar;
