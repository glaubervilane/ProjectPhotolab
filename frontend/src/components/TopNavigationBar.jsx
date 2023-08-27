import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ favoritedCount, topicData, fetchTopicPhotos, resetTopicPhotos }) => {
  return (
    <div className="top-nav-bar">
      {/* Logo link */}
      <a className="top-nav-bar__logo" href="#" onClick={(e) => {
        e.preventDefault();
        // Trigger resetTopicPhotos when logo is clicked
        resetTopicPhotos();
      }}>
        PhotoLabs
      </a>
      {/* Display topic list */}
      <TopicList  
        topicData={topicData} 
        fetchTopicPhotos={fetchTopicPhotos}
      />
      {/* Display favorite badge */}
      <FavBadge isFavPhotoExist={favoritedCount > 0} />
    </div>
  );
}

export default TopNavigationBar;
