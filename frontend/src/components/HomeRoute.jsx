// HomeRoute.jsx
import React from 'react';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ openModal, isModalOpen, selectedPhotoData, favoritedPhotos, onToggleFavorite, photoData, topicData }) => {
  return (
    <div className="home-route">
      <TopNavigationBar favoritedCount={favoritedPhotos.length} />
      <PhotoList
        onToggleFavorite={onToggleFavorite}
        favoritedPhotos={favoritedPhotos}
        onToggleModal={openModal}
        isModalOpen={isModalOpen}
        photoData={photoData}
        topicData={topicData}
        selectedPhotoData={selectedPhotoData}
      />
    </div>
  );
};

export default HomeRoute;