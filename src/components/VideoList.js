import React from 'react';
import VideoItem from './VideoItem';

export default ({ videos, onVideoSelect }) => {
  const videoList = videos.map((video) => {
    return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
  });
  return <div className="ui relaxed divided list">{videoList}</div>;
}
