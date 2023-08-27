import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ favoritedCount, topicData, fetchTopicPhotos, resetTopicPhotos }) => {
  return (
    <div className="top-nav-bar">
      <a className="top-nav-bar__logo" href="#" onClick={(e) => {
        e.preventDefault()
        resetTopicPhotos()
      }}>PhotoLabs</a>
      <TopicList  
        topicData={topicData} 
        fetchTopicPhotos={fetchTopicPhotos}
      />
      <FavBadge isFavPhotoExist={favoritedCount > 0} />
    </div>
  );
}

export default TopNavigationBar;
