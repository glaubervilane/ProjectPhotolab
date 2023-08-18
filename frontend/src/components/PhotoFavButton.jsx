import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={toggleFavorite}>
        <FavIcon selected={isFavorited} />
      </div>
    </div>
  );
}

export default PhotoFavButton;