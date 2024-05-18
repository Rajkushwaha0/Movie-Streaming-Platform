import Header from "./Header";
import { BG_URL } from "../utils/constant";
import { useEffect, useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  function toggleSignInForm() {
    setIsSignIn(!isSignIn);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="background" />
      </div>
      <form className="absolute bg-black w-3/12 p-12 mx-auto right-0 left-0 my-44 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Username"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="p-4 text-gray-500 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
