import React from 'react';
import useApplicationData, { ACTIONS } from './hooks/useApplicationData';
import PhotoModal from "./components/PhotoModal";
import HomeRoute from './components/HomeRoute';
import './App.scss';
import './styles/PhotoDetailsModal.scss';

const App = () => {
  // Initialize application data using custom hook
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
    {/* Render the main content */}
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
      {/* Render the modal if it's open */}
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
