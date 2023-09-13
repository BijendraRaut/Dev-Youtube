import React from "react";

const VideoCard = ({ info }) => {
  return (
    <div className="m-2 p-2 w-72 shadow-lg">
      <img
        className="rounded-lg"
        src={info?.snippet?.thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <ul>
        <li className="font-bold py-2">{info?.snippet.title}</li>
        <li className="text-gray-500">{info?.snippet.channelTitle}</li>
        <li className="text-gray-500">{info?.statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
