import './VideoItem.scss';
import React from 'react';

export default ({ video, onVideoSelect }) => {
  return (
    <div className="item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
