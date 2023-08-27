import React from "react";
import PhotoListItem from "./PhotoListItem";
import useApplicationData, { ACTIONS } from "../hooks/useApplicationData";

import "../styles/PhotoList.scss";

const PhotoList = ({ onToggleFavorite, favoritedPhotos, onToggleModal, photoData }) => {
  const { topicData } = useApplicationData();
  return (
    <ul className="photo-list">
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
