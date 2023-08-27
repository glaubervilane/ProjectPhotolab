import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";
import "../styles/PhotoDetailsModal.scss"; 

function PhotoListItem({
  photoData,
  onToggleFavorite,
  isFavorited,
  onToggleModal,
}) {
  const { id, location, urls, user } = photoData;

  return (
    <div className="photo-list__item">
      {/* Display the photo image */}
      <div className="photo-image">
        {/* Render the PhotoFavButton for favoriting */}
        <PhotoFavButton
          onToggleFavorite={() => onToggleFavorite(id)}
          isFavorited={isFavorited}
        />
        {/* Display the photo */}
        <img
          src={urls.regular}
          alt={`Photo by ${user.username}`}
          className="photo-list__image"
          onClick={() => onToggleModal(photoData)}
        />
      </div>
      {/* Display user details */}
      <div className="photo-list__user-details">
        {/* Display user profile image */}
        <img
          src={user.profile}
          alt={`Profile of ${user.username}`}
          className="photo-list__user-profile"
        />
        {/* Display user information */}
        <div className="photo-list__user-info">
          <span className="username">{user.name}</span> <br />
          {/* Display user's city and country */}
          <span className="photo-list__user-location">
            {location.city}, {location.country}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PhotoListItem;