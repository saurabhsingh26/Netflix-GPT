import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

const GptMovieSuggestions = () => {
  const gptMovies = useSelector((store) => store.gpt.gptMovies);
  console.log("gptMovies", gptMovies);
  return (
    <div className="text-[#E50914] w-[100%] absolute top-48">
      <div className=" ">
        <MovieList title="Results" movies={gptMovies} />
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
