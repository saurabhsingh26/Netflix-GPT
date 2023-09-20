import React from "react";
import useWindowSize from "../utils/useWindowSize";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
const VideoTitle = ({ title, overview }) => {
  const selectedLang = useSelector((store) => store.config.lang);
  const screen = useWindowSize();
  return (
    <>
      {screen.width >= 640 ? (
        <div className="w-[98.7vw] aspect-video pt-20 md:pt-24 lg:pt-36 px-2 sm:px-12 absolute top-0 bg-gradient-to-r from-black">
          <h1 className="text-9xl lg:text-9xl lg:font-bold text-[#E50914]">
            {title}
          </h1>
          {/* <p className="py-3 text-[14px] lg:text-lg text-gray-500 lg:text-white lg:w-1/2">
            {overview}
          </p> */}
          <div className="mt-10">
            <button className="px-8 py-2 bg-white text-black rounded-md">
              ▶{lang[selectedLang].play}
            </button>
            <button className="px-8 py-2 bg-gray-500 text-white bg-opacity-50 rounded-md mx-3">
              {lang[selectedLang].moreinfo}
            </button>
          </div>
        </div>
      ) : (
        <div className="w-[98.7vw] aspect-video pt-20 md:pt-24 lg:pt-36 px-5  absolute top-0 bg-gradient-to-r from-black">
          <h1 className="text-2xl lg:text-4xl lg:font-bold text-[#E50914]">
            {title}
          </h1>
          <div className="pt-7">
            <button className="px-8 py-2 bg-white text-black rounded-md">
              ▶{lang[selectedLang].play}
            </button>
            <button className="px-8 py-2 bg-gray-500 text-white bg-opacity-50 rounded-md mx-3">
              {lang[selectedLang].moreinfo}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoTitle;
