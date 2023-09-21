import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
const MovieCard = ({ movies }) => {

  if (!movies) return;
  return (
    <div className="overflow-x-scroll">
      <div className="w-40 md:w-52 flex justify-between">
        {movies.map((movie) => (
          <img
            className="cursor-pointer rounded-3xl mr-6"
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
