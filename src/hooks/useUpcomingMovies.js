/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MOVIE_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../Redux/slices/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      MOVIE_OPTIONS
    );
    const json = await data.json();
    // console.log("json", json.results);
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upcomingMovies && getTopRatedMovies();
  }, []);
};

export default useUpcomingMovies;
