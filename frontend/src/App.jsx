import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoFavButton from './components/PhotoFavButton';
import TopNavigationBar from './components/TopNavigationBar';
import './App.scss';
import './styles/PhotoDetailsModal.scss';
import similarPhotos from './mocks/photos';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhotoData, setSelectedPhotoData] = useState(null);

  const toggleModal = (photoData) => {
    setIsModalOpen(!isModalOpen);
    setSelectedPhotoData(photoData);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhotoData(null);
  };

  const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  // Function to toggle favorite for the main photo
  const toggleFavorite = (photoId) => {
    if (favoritedPhotos.includes(photoId)) {
      setFavoritedPhotos(favoritedPhotos.filter(id => id !== photoId));
    } else {
      setFavoritedPhotos([...favoritedPhotos, photoId]);
    }
  };

  // Determine if a photo is favorited
  const isPhotoFavorited = (photoId) => {
    return favoritedPhotos.includes(photoId);
  };

  return (
    <div className="App">
      <TopNavigationBar favoritedCount={favoritedPhotos.length} />
      <HomeRoute
        openModal={toggleModal}
        isModalOpen={isModalOpen}
        selectedPhotoData={selectedPhotoData}
        favoritedPhotos={favoritedPhotos}
        onToggleFavorite={toggleFavorite}
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
            <div className={`photo-details-modal__similar-photo ${similarPhotos.length > 3 ? 'wrap' : ''}`}>
              {similarPhotos.slice(0, 3).map(photo => (
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
