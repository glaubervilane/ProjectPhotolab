import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";
import "../styles/PhotoDetailsModal.scss"; 

function PhotoListItem({ photoData, onToggleFavorite, isFavorited, onToggleModal, isModalOpen, selectedPhotoData }) {
  const { id, location, urls, user } = photoData;

  return (
    <div className="photo-list__item">
      <div className="photo-image">
        <PhotoFavButton
          onToggleFavorite={() => onToggleFavorite(id)}
          isFavorited={isFavorited}
        />
        <img
          src={urls.regular}
          alt={`Photo by ${user.username}`}
          className="photo-list__image"
          onClick={() => onToggleModal(photoData)}
        />
      </div>
      <div className="photo-list__user-details">
        <img src={user.profile} 
          alt={`Profile of ${user.username}`} 
          className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <span className="username">{user.name}</span> <br />
          <span className="photo-list__user-location">{location.city}, {location.country}</span>
        </div>
      </div>
    </div>
  );
}

export default PhotoListItem;