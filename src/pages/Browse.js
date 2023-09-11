import React from "react";
import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <div className="absolute top-20">
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
