import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { MOVIE_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../Redux/slices/gptSlice";
const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const selectedLang = useSelector((store) => store.config.lang);

  const handleChange = async() => {
    const query = searchText.current.value;
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&page=1`,
      MOVIE_OPTIONS
    );
    const json = await data.json();
    dispatch(addGptMovieResults(json.results));
  }

  const handleGptSearchClick = async () => {
    const query = searchText.current.value;
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&page=1`,
      MOVIE_OPTIONS
    );
    const json = await data.json();
    dispatch(addGptMovieResults(json.results));
  };

  return (
    <div className="flex justify-center w-[100%] mt-36 absolute md:-top-10">
      <form
        className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] bg-black p-2 flex"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          onChange={handleChange}
          ref={searchText}
          type="text"
          placeholder={lang[selectedLang].gptSearchPlaceholder}
          className="w-[100%] p-2 outline-none border"
        />
        <button
          onClick={handleGptSearchClick}
          className="text-white bg-[#E50914] px-3"
        >
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
