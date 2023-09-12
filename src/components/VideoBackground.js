import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="bg-gradient-to-b from-black">
      <iframe
        className="w-[98.7vw] aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=G8BbXUfNjICHxmXr&amp;controls=0&autoplay=1&mute=1&loop=1&color=white`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
