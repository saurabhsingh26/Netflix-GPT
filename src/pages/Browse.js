import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MOVIE_OPTIONS } from "../utils/constants";
import Header from "../components/Header";
import { addNowPlayingMovies } from "../Redux/slices/movieSlice";
const Browse = () => {
  
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', MOVIE_OPTIONS);
    const json = await data.json();
    console.log("json", json.results);
    dispatch(addNowPlayingMovies(json.results));
  } 

  useEffect(() => {
    getNowPlayingMovies();
  }, [])

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
