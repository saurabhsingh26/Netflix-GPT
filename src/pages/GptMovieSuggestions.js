import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import lang from "../utils/languageConstants";

const GptMovieSuggestions = () => {
  const gptMovies = useSelector((store) => store.gpt.gptMovies);
  const selectedLang = useSelector((store) => store.config.lang);
  if (!gptMovies) return;
  return (
    <div className="text-[#E50914] w-[100%] absolute top-52 md:top-36">
      <div className="">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold my-6 md:my-3 text-center">
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
