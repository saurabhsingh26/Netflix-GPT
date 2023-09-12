import React, { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import Header from "../components/Header";
import { checkValidData } from "../utils/validate";
import { addUser } from "../Redux/slices/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // eslint-disable-next-line no-unused-vars
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/80765330?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          setErrorMessage(errorCode);
          // ..
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          setErrorMessage(errorCode);
        });
    }
  };

  return (
    <div style={myStyle} className="background-color">
      <Header />
      <div className="flex justify-center">
        <div className="w-[100%] sm:w-[60%] md:w-[50%] lg:w-[35%] bg-[#000000BF] flex justify-center absolute top-20">
          <div className="w-[70%]">
            <form onSubmit={(e) => e.preventDefault()}>
              <h1 className="text-white mt-10 text-4xl font-semibold">
                {isSignInForm ? "Login" : "Sign Up"}
              </h1>
              {!isSignInForm && (
                <input
                  ref={name}
                  type="text"
                  style={{ color: "#ffffff" }}
                  placeholder="Name"
                  className="px-2 py-3 mb-3 mt-6 outline-none bg-[#333333] rounded w-[100%]"
                />
              )}
              {isSignInForm ? (
                <input
                  ref={email}
                  type="email"
                  style={{ color: "#ffffff" }}
                  placeholder="Email or phone number"
                  className="px-2 py-3 mb-3 mt-6 outline-none bg-[#333333] rounded w-[100%]"
                />
              ) : (
                <input
                  ref={email}
                  type="email"
                  style={{ color: "#ffffff" }}
                  placeholder="Email or phone number"
                  className="px-2 py-3 mb-3 outline-none bg-[#333333] rounded w-[100%]"
                />
              )}
              <input
                ref={password}
                type="password"
                style={{ color: "#ffffff" }}
                placeholder="Password"
                className="px-2 py-3 outline-none bg-[#333333] rounded w-[100%]"
              />
              <p className="text-red-700 py-2 font-semibold">{errorMessage}</p>
              <button
                onClick={handleButtonClick}
                type="submit"
                className="bg-[#E50914] py-3 text-white mt-6 rounded w-[100%] font-bold"
              >
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
            </form>
            <div className="mb-16">
              <p
                className="text-base text-[#737373] mt-8 cursor-pointer"
                onClick={toggleSignInForm}
              >
                {isSignInForm ? (
                  <>
                    New to Netflix? &nbsp;
                    <span className="text-white">Sign up now</span>
                  </>
                ) : (
                  <>
                    Already registered? &nbsp;
                    <span className="text-white">Sign In now</span>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

const myStyle = {
  backgroundImage:
    "url('https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_small.jpg')",
  height: "100vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};