import React from "react";
import "../styles/PhotoListItem.scss";


function PhotoListItem(props) {
  const { id, location, imageSource, username, profile } = props.photoData;

  return (
    <div className="photo-list__item">
      <div className="photo-image">
        <img src={imageSource} alt={`Photo by ${username}`} />
      </div>
      <div className="photo-info">
        <div className="user-profile">
          <img src={profile} alt={`Profile of ${username}`} />
          <span className="username">{username}</span>
        </div>
        <div className="location">
          {location.city}, {location.country}
        </div>
      </div>
    </div>
  );
}

export default PhotoListItem;