import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ onToggleFavorite, isFavorited }) {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={onToggleFavorite}>
        <FavIcon selected={isFavorited} />
      </div>
    </div>
  );
}

export default PhotoFavButton;