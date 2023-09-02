import { useId, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { NavLink } from "react-router-dom";
import axios from "axios";
import useMutation from "../hook/useMutation";
import { useNavigate } from "react-router";
import { login } from "../services/userService";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const initialValues = {
  email: "",
  password: "",
};

const validationsSchema = yup.object({
  email: yup.string().email().min(5, "username is too short"),
  password: yup
    .string()
    .min(5, "password is too short")
    .matches(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$",
      "password is weak"
    ),
});

const Login = () => {
  const id = useId();
  const navigate = useNavigate();
  const {loggedIn, setLoggedIn} = useContext(LoginContext);

  const { mutate, error } = useMutation(login, (data) => {
    console.log(data);
    localStorage.setItem("token",data.access_token);
    setLoggedIn(true);
    navigate("/");
  });

  const formik = useFormik({
    initialValues,
    validationsSchema,
    validateOnMount: true,
    onSubmit: async (values) => {
      mutate(values);
      
    },
  });
  console.log(error)
  return (
    <div className=" max-w-xs m-10 container-fluid  ">
      <form
        onSubmit={formik.handleSubmit}
        className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-purple-600"
      >
        <h5 className="text-center  pb-2 font-serif border-b-4 border-red-600">
          Login Form
        </h5>

        <label htmlFor={`email-${id}`}>Email</label>
        <input
          id={`email-${id}`}
          placeholder="email"
          name="email"
          onChange={formik.handleChange}
          className="border border-red-500 rounded w-full py-2 px-3 mb-3 "
        ></input>
        {formik.errors.username && (
          <p className="text-red-400">{formik.errors.username}</p>
        )}
        <label htmlFor={`password-${id}`}>Password</label>
        <input
          id={`password-${id}`}
          placeholder="password"
          name="password"
          onChange={formik.handleChange}
          className="border border-red-500 rounded w-full py-2 px-3 mb-3 "
        ></input>
        {formik.errors.password && (
          <p className="text-red-400">{formik.errors.password}</p>
        )}
        {error && <p className="text-red-800">{error}</p>}








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
            href="#"
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
  );
};

export default Login;
