import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import lang from "../utils/languageConstants";

const GptMovieSuggestions = () => {
  const gptMovies = useSelector((store) => store.gpt.gptMovies);
  const selectedLang = useSelector((store) => store.config.lang);
  if (!gptMovies) return;
  return (
    <div className="text-[#E50914] w-[100%] absolute top-40">
      <div className="">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6 text-center">
          {lang[selectedLang].results}
        </h1>
        <div>
          <MovieCard movies={gptMovies} />
        </div>
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
