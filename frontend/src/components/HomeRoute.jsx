import React, { useState } from 'react';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ openModal, isModalOpen, selectedPhotoData }) => {
  // State to track favorited photo IDs
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  // Function to toggle favorited state
  const toggleFavorite = (photoId) => {
    if (favoritedPhotos.includes(photoId)) {
      setFavoritedPhotos(favoritedPhotos.filter(id => id !== photoId));
    } else {
      setFavoritedPhotos([...favoritedPhotos, photoId]);
    }
  };

  return (
    <div className="home-route">
      <TopNavigationBar favoritedCount={favoritedPhotos.length} />
      <PhotoList
        onToggleFavorite={toggleFavorite}
        favoritedPhotos={favoritedPhotos}
        onToggleModal={openModal}
        isModalOpen={isModalOpen}
        selectedPhotoData={selectedPhotoData}
      />
    </div>
  );
};

export default HomeRoute;