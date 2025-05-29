import React from "react";

const VideoCard = ({ videoDetails }) => {
  return (
    <div className='flex flex-wrap'>
          <div className="w-72 rounded-xl shadow-xl m-2 p-2"> 
            <img className="rounded-lg" alt="video-thumbnil" src={ videoDetails.snippet.thumbnails.high.url } />
            <h1 className="font-bold py-2">{videoDetails.snippet.title}</h1>
            <h1>{videoDetails.snippet.channelTitle}</h1>
            <h4>{videoDetails.statistics.viewCount} Views</h4>
          </div>
    </div>
  );
};

export default VideoCard;
