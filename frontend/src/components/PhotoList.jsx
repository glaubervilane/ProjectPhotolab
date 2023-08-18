import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const sampleDataForPhotoList = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  },
  {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    username: "Another User",
    profile: `${process.env.PUBLIC_URL}/profile-2.jpg`,
  },
  {
    id: "3",
    location: {
      city: "Ottawa",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    username: "Yet Another User",
    profile: `${process.env.PUBLIC_URL}/profile-3.jpg`,
  },
];

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {sampleDataForPhotoList.map((photoData) => (
        <PhotoListItem key={photoData.id} photoData={photoData} />
      ))}
    </ul>
  );
};

export default PhotoList;
