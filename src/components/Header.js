import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Redux/slices/userSlice";
import { toggltGptSearchView } from "../Redux/slices/gptSlice";
import { changeLanguage } from "../Redux/slices/configSlice";
import { auth } from "../utils/firebase";
import { LOGO } from "../utils/constants";
import search from "../assets/search.svg";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import lang from "../utils/languageConstants";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const selectedLang = useSelector((store) => store.config.lang);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleSearchToggle = () => {
    dispatch(toggltGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className="bg-gradient-to-b from-black h-20 w-[100%] flex justify-between relative z-40">
      <div className="w-36 md:w-64 md:h-12 md:px-4 pt-0">
        <Link to="/">
          <img src={LOGO} alt="logo" />
        </Link>
      </div>
      {!user && (
        <div className="pt-3 md:pt-6 px-2 md:px-6">
          <select
            className="outline-none rounded text-white bg-[#E50914] py-1 px-2"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((language) => (
              <option key={language.identifier} value={language.identifier}>
                {language.name}
              </option>
            ))}
          </select>
        </div>
      )}
      {user && (
        <div className="pt-3 pr-4 md:pt-6 md:pr-4 flex">
          <div onClick={handleSearchToggle}>
            <div className="h-7 flex mx-2 sm:mx-3 lg:mx-10 cursor-pointer">
              <img src={search} alt="search" />
            </div>
          </div>
          <img
            className="h-7"
            src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
            alt=""
          />
          <button
            onClick={handleSignOut}
            className="text-white bg-[#E50914] h-7 px-1"
          >
            {lang[selectedLang].signout}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
