import React from "react";
import TopicListItem from "./TopicListItem";
import useApplicationData, { ACTIONS } from "../hooks/useApplicationData";
import topics from "../mocks/topics";
import "../styles/TopicList.scss";

const TopicList = () => {
  const { topicData } = useApplicationData();
  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map((topicData) => (
        <TopicListItem key={topicData.id} topicData={topicData} />
      ))}
    </div>
  );
};

export default TopicList;