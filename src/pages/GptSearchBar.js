import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
const GptSearchBar = () => {
  const selectedLang = useSelector((store) => store.config.lang)
  return (
    <div className="flex justify-center w-[100%] mt-36">
      <form className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] bg-black p-2">
        <input
          type="text"
          placeholder={lang[selectedLang].gptSearchPlaceholder}
          className="w-[100%] p-2 outline-none border"
        />
      </form>
    </div>
  );
};

export default GptSearchBar;
