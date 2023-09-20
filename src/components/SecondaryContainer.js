import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import lang from "../utils/languageConstants";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const selectedLang = useSelector((store) => store.config.lang);
  return (
    <div className="bg-black text-white pb-10">
      <div className="md:-mt-48 lg:-mt-56 relative">
        <MovieList
          title={lang[selectedLang].nowplaying}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          title={lang[selectedLang].toprated}
          movies={movies.topRatedMovies}
        />
        <MovieList
          title={lang[selectedLang].popular}
          movies={movies.popularMovies}
        />
        <MovieList
          title={lang[selectedLang].upcoming}
          movies={movies.upcomingMovies}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
