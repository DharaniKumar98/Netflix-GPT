import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movie_id }) => {
  useTrailerVideo(movie_id);
  const mainMovieTrailerVideo = useSelector(
    (store) => store.movies?.mainMovieTrailerVideo
  );

  return (
    <div className="w-screen">
      <iframe
      className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + mainMovieTrailerVideo?.key+"?&autoplay=1&mute=1&loop=1&playlist="+mainMovieTrailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;