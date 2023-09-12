import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div>
      <div className="px-2">
        <h1 className="text-3xl font-bold py-4 px-2">{title}</h1>
        <div>
          <MovieCard movies={movies} />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
