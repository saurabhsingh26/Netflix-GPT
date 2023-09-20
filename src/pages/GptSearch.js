import React from "react";
import { GptSearchBar, GptMovieSuggestions } from "./";
const GptSearch = () => {
  return (
    <div style={myStyle} className="absolute top-0">
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;

const myStyle = {
  backgroundImage:
    "url('https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_small.jpg')",
  height: "100vh",
  width:"100vw",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};