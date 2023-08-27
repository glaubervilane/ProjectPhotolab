import React from "react";
import "../styles/TopicListItem.scss";

function TopicListItem({ topicData:{ id, title }, fetchTopicPhotos}) {
  return (
    <div className="topic-list__item">
      <a href="#" onClick={(e) => {
        e.preventDefault()
        fetchTopicPhotos(id)
      }}>{title}</a>
    </div>
  );
}

export default TopicListItem;