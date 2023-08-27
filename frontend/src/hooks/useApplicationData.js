import { useEffect, useReducer } from "react";

export const ACTIONS = {
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  FETCH_TOPIC_PHOTOS: 'FETCH_TOPIC_PHOTOS',
  RESET_TOPIC_PHOTOS: 'RESET_TOPIC_PHOTOS',
};

const initialState = {
  isModalOpen: false,
  selectedPhotoData: null,
  favoritedPhotos: [],
  photoData: [],
  topicData: [],
  currentTopic: null
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload 
      };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload 
    };
    case ACTIONS.FETCH_TOPIC_PHOTOS:
      return { ...state, currentTopic: action.payload 
    };
    case ACTIONS.RESET_TOPIC_PHOTOS:
      return { ...state, currentTopic: null 
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

  const fetchTopicPhotos = (topicId) => {
    dispatch({ type: ACTIONS.FETCH_TOPIC_PHOTOS, payload: topicId });
  }; 

  const resetTopicPhotos = () => {
    dispatch({ type: ACTIONS.RESET_TOPIC_PHOTOS });
  };  

  const isPhotoFavorited = (photoId) => {
    return state.favoritedPhotos.includes(photoId);
  };  

  useEffect(() => {
    !state.currentTopic && fetch('/api/photos')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  }, [state.currentTopic]);
  
  useEffect(() => {
    fetch('/api/topics')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      })
      .catch((error) => {
        console.error('Error fetching topics:', error);
      });
  }, []);
  
  useEffect(() => {
    state.currentTopic && fetch(`/api/topics/photos/${state.currentTopic}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => {
        console.error('Error fetching topic/photos:', error);
      });
  }, [state.currentTopic]);

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
