import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { MOVIE_OPTIONS } from "../utils/constants";
const Browse = () => {

  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', MOVIE_OPTIONS);
    const json = await data.json();
    console.log("json", json);
  } 

  useEffect(() => {
    getNowPlayingMovies();
  }, [])

  return (
    <div>
      <div className="bg-gradient-to-b from-black h-24 w-screen flex justify-between">
        <div className="w-64 h-12 px-4 pt-0">
          <img
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
          />
        </div>
        <div className="pt-6 pr-4">
          <img
            className="text-center"
            src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
            alt=""
          />
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      </div>
    </div>
  );
};

export default Browse;
