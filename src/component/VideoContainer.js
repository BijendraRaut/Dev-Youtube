import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API_URL } from "./utils/constants";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div>
      <VideoCard info={videos[0]} />
    </div>
  );
};

export default VideoContainer;
