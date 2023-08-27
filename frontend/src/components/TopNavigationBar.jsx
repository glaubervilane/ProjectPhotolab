import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ favoritedCount, topicData, fetchTopicPhotos }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList  
        topicData={topicData} 
        fetchTopicPhotos={fetchTopicPhotos}
      />
      <FavBadge isFavPhotoExist={favoritedCount > 0} />
    </div>
  );
}

export default TopNavigationBar;
