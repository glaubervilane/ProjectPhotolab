// HomeRoute.jsx
import React from 'react';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ openModal, isModalOpen, selectedPhotoData, favoritedPhotos, onToggleFavorite }) => {
  return (
    <div className="home-route">
      <TopNavigationBar favoritedCount={favoritedPhotos.length} />
      <PhotoList
        onToggleFavorite={onToggleFavorite}
        favoritedPhotos={favoritedPhotos}
        onToggleModal={openModal}
        isModalOpen={isModalOpen}
        selectedPhotoData={selectedPhotoData}
      />
    </div>
  );
};

export default HomeRoute;