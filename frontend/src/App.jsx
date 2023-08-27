import React, { useEffect } from 'react';
import useApplicationData, { ACTIONS } from './hooks/useApplicationData';
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
      />
      {/* Modal */}
      {isModalOpen && selectedPhotoData && (
        <div className={`photo-details-modal ${isModalOpen ? 'open' : ''}`}>
          {/* Close button */}
          <button className="photo-details-modal__close-button" onClick={closeModal}>
            X
          </button>
          {/* Display modal image */}
          <div className="photo-details-modal__images">
            {/* PhotoFavButton for the main image */}
            <div className="photo-image">
              <PhotoFavButton
                onToggleFavorite={() => toggleFavorite(selectedPhotoData.id)}
                isFavorited={isPhotoFavorited(selectedPhotoData.id)}
              />
              <img src={selectedPhotoData.urls.full} className="photo-details-modal__image" alt={`Larger Photo by ${selectedPhotoData.user.username}`} />
            </div>
            <div className="photo-details-modal__header">Similar Photos</div>
            {/* Display similar photos */}
            <div className={`photo-details-modal__similar-photo ${selectedPhotoData.similarPhotos?.length > 3 ? 'wrap' : ''}`}>
              {selectedPhotoData.similar_photos?.slice(0, 3).map(photo => (
                <div className="photo-details-modal__image" key={photo.id}>
                    <PhotoFavButton
                      onToggleFavorite={() => toggleFavorite(photo.id)}
                      isFavorited={isPhotoFavorited(photo.id)}
                    />
                  <img
                    src={photo.urls.regular}
                    className="photo-details-modal__similar-photo"
                    alt={`Similar Photo by ${photo.user.username}`}
                    onClick={() => toggleModal(photo)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
