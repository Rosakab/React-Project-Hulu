import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import SubHeader from "./SubHeader";

const LoginForm = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const usernameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsername("");
    setPassword("");
  };

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <>
     
      <div className=" max-w-xs m-10  container-fluid ">
        <form
          onSubmit={handleSubmit}
          className=" shadow-lg rounded px-8 pt-6 pb-8  bg-purple-600 "
        >
          <h5 className="text-center  pb-2 font-serif border-b-4 border-red-600">
            Login Form
          </h5>
          <label htmlFor="username" className="mt-3 pl-2 font-serif  ">
            Username
          </label>
          <input
            className="border shadow-md  w-full py-2 px-2 my-1 "
            placeholder="username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            ref={usernameRef}
            required
          />
          <label htmlFor="password" className="mt-2 pl-2 mb-1 font-serif    ">
            Password
          </label>
          <input
            className="border shadow-md  w-full py-2 px-2 mb-2"
            placeholder="password"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            type="submit"
            className="bg-blue-800   hover:bg-red-800 w-full text-white  py-1 mt-2 font-serif"
          >
            Login
          
          </button>
          <p className="text-center text-gray-800 pt-2 font-serif my-2">
            Or login with
          </p>
          <div className="flex flex-col justify-between">
            <button
              type="button"
              className="bg-blue-800 hover:bg-red-800 text-white  py-1 mt-1 font-serif"
            >
              Facebook
            </button>
            <button
              type="button"
              className="bg-blue-800 hover:bg-red-800 text-white  py-1  mt-1.5 font-serif"
            >
              Google
            </button>
          </div>
          <div className="flex justify-between items-center">
            <NavLink
              href="Login"
              className="no-underline font-serif text-black pt-3 text-sm"
            >
              Forgot Password?
            </NavLink>
            <NavLink
              to="/CreateAccount"
              className="no-underline font-serif text-black pt-3 text-sm"
            >
              Create an account
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
