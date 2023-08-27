import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ onToggleFavorite, favoritedPhotos, onToggleModal, photoData }) => {
  return (
    <ul className="photo-list">
    {/* Map through the photoData array */}
      {photoData.map((photoData) => (
        <PhotoListItem
          key={photoData.id}
          photoData={photoData}
          onToggleFavorite={onToggleFavorite}
          isFavorited={favoritedPhotos.includes(photoData.id)}
          onToggleModal={onToggleModal}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
