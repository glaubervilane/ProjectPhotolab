import React from "react";
import PhotoListItem from "./PhotoListItem";
import photos from "../mocks/photos";

import "../styles/PhotoList.scss";

const PhotoList = ({ onToggleFavorite, favoritedPhotos }) => {
  return (
    <ul className="photo-list">
      {photos.map((photoData) => (
        <PhotoListItem
          key={photoData.id}
          photoData={photoData}
          onToggleFavorite={onToggleFavorite}
          isFavorited={favoritedPhotos.includes(photoData.id)}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
