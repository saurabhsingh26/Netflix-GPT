import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";
const GptSearchBar = () => {
  const searchText = useRef(null);
  const selectedLang = useSelector((store) => store.config.lang);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholey, Don, 3 idiots, Drishyam";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
  };

  return (
    <div className="flex justify-center w-[100%] mt-36">
      <form
        className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] bg-black p-2 flex"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[selectedLang].gptSearchPlaceholder}
          className="w-[100%] p-2 outline-none border"
        />
        <button
          onClick={handleGptSearchClick}
          className="text-white bg-[#E50914] px-3"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
