import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div style={myStyle} className="flex justify-center items-center h-[100vh]">
      <div className="flex flex-col items-center justify-center bg-[#000000BF] p-10">
        <div className="font-bold text-3xl text-[#E50914]">Uh-oh!</div>
        <div className="mt-2 mb-4 text-base flex flex-col text-[#E50914]">
          <span> Sorry! This should not have happened.</span>
          <span className="text-center">Please retry.</span>
        </div>

        <Link
          to="/"
          className="text-white py-2 px-4 text-base font-bold rounded bg-[#E50914]"
        >
          MOVIES
        </Link>
      </div>
    </div>
  );
};

export default Error;

const myStyle = {
  backgroundImage:
    "url('https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_small.jpg')",
  height: "100vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
