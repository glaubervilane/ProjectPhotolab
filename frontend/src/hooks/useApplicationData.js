// hooks/useApplicationData.js
import React, { useState, useEffect, useReducer } from "react";

export const ACTIONS = {
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
};

const initialState = {
  isModalOpen: false,
  selectedPhotoData: null,
  favoritedPhotos: [],
  photoData: [],
  topicData: []
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA: // Add this case
      return { ...state, photoData: action.payload 
      };
    case ACTIONS.TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        selectedPhotoData: action.payload,
      };
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
        selectedPhotoData: null,
      };
    case ACTIONS.TOGGLE_FAVORITE:
      const photoId = action.payload;
      const favoritedPhotos = state.favoritedPhotos.includes(photoId)
        ? state.favoritedPhotos.filter(id => id !== photoId)
        : [...state.favoritedPhotos, photoId];
      return {
        ...state,
        favoritedPhotos,
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleModal = (photoData) => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL, payload: photoData });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const toggleFavorite = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: photoId });
  };

  const isPhotoFavorited = (photoId) => {
    return state.favoritedPhotos.includes(photoId);
  };

  return {
    isModalOpen: state.isModalOpen,
    selectedPhotoData: state.selectedPhotoData,
    toggleModal,
    closeModal,
    favoritedPhotos: state.favoritedPhotos,
    toggleFavorite,
    isPhotoFavorited,
  };
};

export default useApplicationData;
