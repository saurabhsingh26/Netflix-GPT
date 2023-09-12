import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
const MovieCard = ({ movies }) => {
  console.log("MMMMMMMMMM", movies);
  if (!movies) return;
  return (
    <div className="overflow-x-scroll">
      <div className="w-40 flex justify-between">
        {movies.map((movie) => (
          <img
            className="pr-2 cursor-pointer"
            key={movie?.id}
            src={IMG_CDN_URL + movie?.poster_path}
            alt={movie?.original_title}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
