import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoDetailsModal.scss";

function PhotoModal({
  selectedPhotoData,
  isModalOpen,
  closeModal,
  toggleFavorite,
  isPhotoFavorited,
  toggleModal,
}) {
  return (
    <div className={`photo-details-modal ${isModalOpen ? "open" : ""}`}>
      {/* Close button */}
      <button
        className="photo-details-modal__close-button"
        onClick={closeModal}
      >
        X
      </button>
      <div className="photo-details-modal__images">
        {/* Main image */}
        <div className="photo-image">
          {/* PhotoFavButton for the main image */}
          <PhotoFavButton
            onToggleFavorite={() =>
              toggleFavorite(selectedPhotoData.id)
            }
            isFavorited={isPhotoFavorited(selectedPhotoData.id)}
          />
          <img
            src={selectedPhotoData.urls.full}
            className="photo-details-modal__image"
            alt={`Larger Photo by ${selectedPhotoData.user.username}`}
          />
        </div>
        {/* Display similar photos */}
        <div className="photo-details-modal__header">Similar Photos</div>
        <div
          className={`photo-details-modal__similar-photo ${
            selectedPhotoData.similarPhotos?.length > 3 ? "wrap" : ""
          }`}
        >
          {selectedPhotoData.similar_photos?.map((photo) => (
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
  );
}

export default PhotoModal;