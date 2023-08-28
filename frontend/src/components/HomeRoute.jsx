import React from 'react';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ openModal, isModalOpen, selectedPhotoData, favoritedPhotos, onToggleFavorite, photoData, topicData, fetchTopicPhotos, resetTopicPhotos, search, setSearch, noResults }) => {
  return (
    <div className="home-route">
    {/* Top navigation bar */}
      <TopNavigationBar 
        favoritedCount={favoritedPhotos.length} 
        topicData={topicData} 
        fetchTopicPhotos={fetchTopicPhotos}
        resetTopicPhotos={resetTopicPhotos}
        search={search} 
        setSearch={setSearch}
      />
      {/* PhotoList component */}
      <PhotoList
        onToggleFavorite={onToggleFavorite}
        favoritedPhotos={favoritedPhotos}
        onToggleModal={openModal}
        isModalOpen={isModalOpen}
        photoData={photoData}
        selectedPhotoData={selectedPhotoData}
      />
      {noResults && <p>No results found for the search criteria.</p>}
    </div>
  );
};

export default HomeRoute;