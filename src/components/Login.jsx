import Header from "./Header";
import { BG_URL } from "../utils/constant";
import { useEffect, useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  function toggleSignInForm() {
    setIsSignIn(!isSignIn);
  }
  function handleButtonClick() {
    //validate the form data
    const nameValue = !isSignIn ? name.current.value : "signin";
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const validateMessage = checkValidData(
      nameValue,
      emailValue,
      passwordValue
    );
    setErrorMessage(validateMessage);
    if (validateMessage) return;
    //now you can sign in / sign up
    if (isSignIn) {
      //sign in logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          //const errorCode = error.code;
          //const errorMessage = error.message;
          setErrorMessage("Invalid Credential");
        });
    } else {
      //signup logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          //const errorCode = error.code;
          //const errorMessage = error.message;
          setErrorMessage("Please Signup again,some error occured");
        });
    }
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="background" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black w-3/12 p-12 mx-auto right-0 left-0 my-44 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl  ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Username"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <p className="text-red-500 font-bold text-lg p-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn ? (
          <p
            className="p-4 text-gray-500 cursor-pointer"
            onClick={toggleSignInForm}
          >
            New to Netflix? <span className="text-white">Sign Up Now</span>
          </p>
        ) : (
          <p
            className="p-4 text-gray-500 cursor-pointer"
            onClick={toggleSignInForm}
          >
            Already Registered? <span className="text-white">Sign In Now</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
