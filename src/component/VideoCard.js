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

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-900 rounded-lg">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
