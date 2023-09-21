import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div>
      <div className="ml-6 md:ml-10">
        <h1 className="text-3xl font-bold py-4">{title}</h1>
        <div>
          <MovieCard movies={movies} />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
