import { useEffect, useReducer } from "react";
import { reducer, ACTIONS } from "./reducer"; // Adjust the path as needed

const initialState = {
  isModalOpen: false,
  selectedPhotoData: null,
  favoritedPhotos: [],
  photoData: [],
  topicData: [],
  currentTopic: null
};

const useApplicationData = () => {
  // Fetch initial photo data when the component mounts
  useEffect(() => {
    fetch('/api/photos')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  }, []);

  // Fetch topic data when the component mounts
  useEffect(() => {
    fetch('/api/topics')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      })
      .catch((error) => {
        console.error('Error fetching topics:', error);
      });
  }, []);
  
  const [state, dispatch] = useReducer(reducer, initialState); 

  // Define actions to update the state
  const toggleModal = (photoData) => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL, payload: photoData });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const toggleFavorite = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: photoId });
  };

  const fetchTopicPhotos = (topicId) => {
    dispatch({ type: ACTIONS.FETCH_TOPIC_PHOTOS, payload: topicId });
  }; 

  const resetTopicPhotos = () => {
    dispatch({ type: ACTIONS.RESET_TOPIC_PHOTOS });
  };  

  const isPhotoFavorited = (photoId) => {
    return state.favoritedPhotos.includes(photoId);
  };  

  // Fetch photos for the selected topic
  useEffect(() => {
    state.currentTopic && fetch(`/api/topics/photos/${state.currentTopic}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => {
        console.error('Error fetching topic/photos:', error);
      });
  }, [state.currentTopic]);

  // Return data and actions to be used in components
  return {
    isModalOpen: state.isModalOpen,
    selectedPhotoData: state.selectedPhotoData,
    toggleModal,
    closeModal,
    favoritedPhotos: state.favoritedPhotos,
    toggleFavorite,
    isPhotoFavorited,
    photoData: state.photoData,
    topicData: state.topicData,
    fetchTopicPhotos,
    resetTopicPhotos,
  };
};

export default useApplicationData;