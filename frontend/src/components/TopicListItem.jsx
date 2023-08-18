import React from "react";
import "../styles/TopicListItem.scss";

function TopicListItem(props) {
  const { id, slug, title } = props.topicData;

  return (
    <div className="topic-list__item">
      <span className="topic-list__item span">{title}</span> <br />
    </div>
  );
}

export default TopicListItem;
