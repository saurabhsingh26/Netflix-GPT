import React from "react";
import useWindowSize from "../utils/useWindowSize";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import play from '../assets/play.svg';
import more from '../assets/more.svg'
const VideoTitle = ({ title, overview }) => {
  const selectedLang = useSelector((store) => store.config.lang);
  const screen = useWindowSize();
  return (
    <>
      {screen.width >= 640 ? (
        <div className="w-[98.7vw] aspect-video pt-20 md:pt-24 lg:pt-48 px-2 sm:px-12 absolute top-0 bg-gradient-to-r from-black">
          <h1 className="text-6xl md:text-7xl md:font-bold lg:text-8xl lg:font-bold text-[#FF5C31] -tracking-[0.3rem] italic">
            {title}
          </h1>
          {/* <p className="py-3 text-[14px] lg:text-lg text-gray-500 lg:text-white lg:w-1/2">
            {overview}
          </p> */}
          <div className="mt-10 flex">
            <button className="px-6 py-2 bg-white text-black rounded-md flex justify-center items-center">
              <span className="mr-2">
                <img src={play} alt="play" />
              </span>
              <span className="text-lg font-semibold">
                {lang[selectedLang].play}
              </span>
            </button>
            <button className="px-6 py-2 bg-[#6D6D6EB3] text-white bg-opacity-50 rounded-md mx-3 flex justify-center items-center">
              <span className="mr-2">
                <img src={more} alt="more-info" />
              </span>
              <span className="text-lg font-semibold">
                {lang[selectedLang].moreinfo}
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div className="w-[98.7vw] aspect-video pt-20 md:pt-24 lg:pt-36 px-5  absolute top-0 bg-gradient-to-r from-black">
          <h1 className="text-4xl font-bold text-white italic">{title}</h1>
          <div className="mt-4 flex">
            <button className="px-6 py-2 bg-white text-black rounded-md flex justify-center items-center">
              <span className="mr-1">
                <img src={play} alt="play" />
              </span>
              <span>{lang[selectedLang].play}</span>
            </button>
            <button className="px-6 py-2 bg-[#6D6D6EB3] text-white bg-opacity-50 rounded-md mx-3 flex justify-center items-center">
              <span className="mr-1">
                <img src={more} alt="more-info" />
              </span>
              <span>{lang[selectedLang].moreinfo}</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoTitle;
