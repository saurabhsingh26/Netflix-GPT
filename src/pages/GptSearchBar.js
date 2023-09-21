import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
const GptSearchBar = () => {
  const searchText = useRef(null);
  const selectedLang = useSelector((store) => store.config.lang);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    
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
