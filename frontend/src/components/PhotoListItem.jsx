import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";


function PhotoListItem(props) {
  const { id, location, imageSource, username, profile } = props.photoData;

  return (
    <div className="photo-list__item">
      <div className="photo-image">
        <PhotoFavButton />
        <img src={imageSource} alt={`Photo by ${username}`} className="photo-list__image" />
      </div>
      <div className="photo-list__user-details">
          <img src={profile} alt={`Profile of ${username}`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <span className="username">{username}</span> <br />
          <span className="photo-list__user-location">{location.city}, {location.country}</span>
        </div>
      </div>
    </div>
  );
}

export default PhotoListItem;