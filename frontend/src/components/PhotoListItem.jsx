import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

function PhotoListItem(props) {
  const { id, location, urls, user } = props.photoData;

  return (
    <div className="photo-list__item">
      <div className="photo-image">
        <PhotoFavButton />
        <img src={urls.regular} alt={`Photo by ${user.username}`} className="photo-list__image" />
      </div>
      <div className="photo-list__user-details">
        <img src={user.profile} alt={`Profile of ${user.username}`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <span className="username">{user.name}</span> <br />
          <span className="photo-list__user-location">{location.city}, {location.country}</span>
        </div>
      </div>
    </div>
  );
}

export default PhotoListItem;
