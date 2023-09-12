import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black text-white">
      <div className="md:-mt-48 lg:-mt-56 relative">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
