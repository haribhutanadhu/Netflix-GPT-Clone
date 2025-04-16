import Header from "./Header";
import bimg from "../assets/backgroundNetflix.jpg";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img
          className="bg-gradient-to-b from-black"
          src={bimg}
          alt="Logo background"
        ></img>
      </div>
      <form className="absolute text-white w-[25%] mx-auto my-24 p-16 left-0 right-0 bg-black/70 ">
        <h1 className="text-white/80 text-3xl font-bold p-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="block w-full p-4 my-6 bg-gray-600"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="block w-full p-4 my-6 bg-gray-600"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="block w-full p-4 my-6 bg-gray-600"
        ></input>
        <div className="flex justify-center">
          <button
            type="submit"
            className="p-4 bg-red-700 w-full cursor-pointer rounded-lg"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </div>
        <div className="flex justify-center gap-5 mt-5 text-while/80">
          <p>{isSignIn ? "New to Netflix ? " : "Already registered ? "}</p>
          <p className="cursor-pointer" onClick={toggleSignInForm}>
            {isSignIn ? "Sign Up" : "Sign In"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
