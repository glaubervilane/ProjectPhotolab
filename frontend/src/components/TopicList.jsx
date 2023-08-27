import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topicData, fetchTopicPhotos }) => {
  return (
    <div className="top-nav-bar__topic-list">
    {/* Map through the topicData array */}
      {topicData.map((topicData) => (
        <TopicListItem 
          key={topicData.id} 
          topicData={topicData}
          fetchTopicPhotos={fetchTopicPhotos}
        />
      ))}
    </div>
  );
};

export default TopicList;