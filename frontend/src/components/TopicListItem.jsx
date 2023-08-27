import React from "react";
import "../styles/TopicListItem.scss";

function TopicListItem({ topicData: { id, title }, fetchTopicPhotos }) {
  return (
    <div className="topic-list__item">
      {/* Display the topic title */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          // Trigger fetchTopicPhotos when the link is clicked
          fetchTopicPhotos(id);
        }}
      >
        {title}
      </a>
    </div>
  );
}

export default TopicListItem;