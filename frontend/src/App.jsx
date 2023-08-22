import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute';
import './App.scss';
import './styles/PhotoDetailsModal.scss';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhotoData, setSelectedPhotoData] = useState(null);

  const toggleModal = (photoData) => {
    setIsModalOpen(!isModalOpen);
    setSelectedPhotoData(photoData);
  };

  return (
    <div className="App">
      <HomeRoute
        openModal={toggleModal}
        isModalOpen={isModalOpen}
        selectedPhotoData={selectedPhotoData}
      />
      {/* Modal */}
      {isModalOpen && selectedPhotoData && (
        <div className={`photo-details-modal ${isModalOpen ? 'open' : ''}`}>
          {/* Close button */}
          <button className="photo-details-modal__close-button" onClick={toggleModal}>
            X
          </button>
          {/* Display modal image */}
          <div className="photo-details-modal__images">
            <img src={selectedPhotoData.urls.full} className="photo-details-modal__image" alt={`Larger Photo by ${selectedPhotoData.user.username}`} />
          </div>
        </div>
      )}

    </div>
  );
};

export default App;