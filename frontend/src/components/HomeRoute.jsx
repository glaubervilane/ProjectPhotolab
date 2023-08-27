// HomeRoute.jsx
import React from 'react';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ openModal, isModalOpen, selectedPhotoData, favoritedPhotos, onToggleFavorite, photoData, topicData, fetchTopicPhotos, resetTopicPhotos }) => {
  return (
    <div className="home-route">
      <TopNavigationBar 
        favoritedCount={favoritedPhotos.length} 
        topicData={topicData} 
        fetchTopicPhotos={fetchTopicPhotos}
        resetTopicPhotos={resetTopicPhotos}
      />
      <PhotoList
        onToggleFavorite={onToggleFavorite}
        favoritedPhotos={favoritedPhotos}
        onToggleModal={openModal}
        isModalOpen={isModalOpen}
        photoData={photoData}
        selectedPhotoData={selectedPhotoData}
      />
    </div>
  );
};

export default HomeRoute;