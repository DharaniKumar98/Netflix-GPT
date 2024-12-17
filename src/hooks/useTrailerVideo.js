import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMainMovieTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (movie_id) => {
  const dispatch = useDispatch();

  // fetch trailer video
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movie_id +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    const videoData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const officialTrailer = videoData[0] ? videoData[0] : json.results[0];
    dispatch(addMainMovieTrailerVideo(officialTrailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useTrailerVideo;
