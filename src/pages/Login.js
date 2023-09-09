import React, { useState } from "react";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <div className="absolute bg-gradient-to-b from-black h-[100%] w-[100%]">
        <div className="w-64 h-12 px-4 pt-0">
          <img
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
          />
        </div>
      </div>
      <div className="w-[35%] absolute bg-[#000000BF] top-[15%] left-[32.5%] flex justify-center ">
        <div className="w-[70%]">
          <form>
            <h1 className="text-white mt-10 text-4xl font-semibold">
              {isSignInForm ? "Login" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                type="text"
                name=""
                value=""
                placeholder="Name"
                className="px-2 py-3 mb-3 mt-6 outline-none bg-[#333333] rounded w-[100%]"
              />
            )}
            {isSignInForm ? (
              <input
                type="email"
                name=""
                value=""
                placeholder="Email or phone number"
                className="px-2 py-3 mb-3 mt-6 outline-none bg-[#333333] rounded w-[100%]"
              />
            ) : (
              <input
                type="email"
                name=""
                value=""
                placeholder="Email or phone number"
                className="px-2 py-3 mb-3 outline-none bg-[#333333] rounded w-[100%]"
              />
            )}
            <input
              type="email"
              name=""
              value=""
              placeholder="Password"
              className="px-2 py-3 outline-none bg-[#333333] rounded w-[100%]"
            />
            <button
              type="submit"
              className="bg-[#E50914] py-3 text-white mt-6 rounded w-[100%]"
            >
              {isSignInForm ? "Login" : "Sign Up"}
            </button>
          </form>
          <div className="mt-5 mb-20">
            <p
              className="text-base text-[#737373] mt-16 cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? (
                <div>
                  New to Netflix? &nbsp;
                  <span className="text-white">Sign up now</span>
                </div>
              ) : (
                <div>
                  Already registered? &nbsp;
                  <span className="text-white">Sign In now</span>
                </div>
              )}
            </p>
            <p className="text-[#8C8C8C] text-[13px] mt-2">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt="background"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
