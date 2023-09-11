import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="py-[205px] px-12 absolute top-0 bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className="py-3 text-lg text-white w-1/4">{overview}</p>
      <div>
        <button className="px-8 py-2 bg-white text-black rounded-md">
          ▶Play
        </button>
        <button className="px-8 py-2 bg-gray-500 text-white bg-opacity-50 rounded-md mx-3">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
