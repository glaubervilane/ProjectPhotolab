import React from 'react';
import useApplicationData, { ACTIONS } from './hooks/useApplicationData';
import PhotoModal from "./components/PhotoModal";
import HomeRoute from './components/HomeRoute';
import PhotoFavButton from './components/PhotoFavButton';
import './App.scss';
import './styles/PhotoDetailsModal.scss';

const App = () => {
  const {
    isModalOpen,
    selectedPhotoData,
    toggleModal,
    closeModal,
    favoritedPhotos,
    toggleFavorite,
    isPhotoFavorited,
    photoData,
    topicData,    
    fetchTopicPhotos,
    resetTopicPhotos,
  } = useApplicationData();
  
  return (
    <div className="App">
      <HomeRoute
        openModal={toggleModal}
        isModalOpen={isModalOpen}
        selectedPhotoData={selectedPhotoData}
        favoritedPhotos={favoritedPhotos}
        onToggleFavorite={toggleFavorite}
        photoData={photoData}
        topicData={topicData}
        fetchTopicPhotos={fetchTopicPhotos}
        resetTopicPhotos={resetTopicPhotos}
      />
      {/* Modal */}
      {isModalOpen && selectedPhotoData && (
        <PhotoModal
          selectedPhotoData={selectedPhotoData}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          toggleFavorite={toggleFavorite}
          isPhotoFavorited={isPhotoFavorited}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
};

export default App;
