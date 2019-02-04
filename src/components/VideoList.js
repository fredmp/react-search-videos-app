import React from 'react';
import VideoItem from './VideoItem';

export default ({ videos, onVideoSelect }) => {
  const videoList = videos.map((video, index) => {
    return <VideoItem key={index} video={video} onVideoSelect={onVideoSelect} />
  });
  return <div className="ui relaxed divided list">{videoList}</div>;
}
