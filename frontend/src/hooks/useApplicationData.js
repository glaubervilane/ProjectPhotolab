// hooks/useApplicationData.js
import { useState } from 'react';

const useApplicationData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhotoData, setSelectedPhotoData] = useState(null);
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  const toggleModal = (photoData) => {
    setIsModalOpen(!isModalOpen);
    setSelectedPhotoData(photoData);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhotoData(null);
  };

  const toggleFavorite = (photoId) => {
    if (favoritedPhotos.includes(photoId)) {
      setFavoritedPhotos(favoritedPhotos.filter(id => id !== photoId));
    } else {
      setFavoritedPhotos([...favoritedPhotos, photoId]);
    }
  };

  const isPhotoFavorited = (photoId) => {
    return favoritedPhotos.includes(photoId);
  };

  return {
    isModalOpen,
    selectedPhotoData,
    toggleModal,
    closeModal,
    favoritedPhotos,
    toggleFavorite,
    isPhotoFavorited,
  };
};

export default useApplicationData;
