import React from "react";
import { useState, useContext } from "react";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  Goo,
  signOut,
} from "firebase/auth";
import { auth, signInWithGoogle } from "./firebase-config";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, username, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen ">
      <div className="w-full p-6 m-auto mt-36 bg-gray-500 rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-mono cursor-pointer text-white underline">
          Login
        </h1>
        <div className="mb-2">
          <label for="username" className="font-mono text-[16px] text-white">
            Username
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-2 font-mono text-gray-900 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="mb-2">
          <label for="password" className="font-mono text-[16px] text-white">
            Password
          </label>
          <input
            type="password"
            className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <a
          href="#"
          className="font-mono cursor-pointer text-[16px] text-white hover:underline"
        >
          Forgot Password?
        </a>
        <div className="mt-6">
          <button
            className="w-full px-4 py-2 tracking-wide font-mono cursor-pointer text-[16px] text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900"
            onClick={login}
          >
            Login
          </button>
        </div>
        <div>
          <button onClick={signInWithGoogle}>Sign in With google</button>
        </div>
        <p className="mt-8 font-mono cursor-pointer text-[12px] text-white">
          {" "}
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-mono cursor-pointer text-[16px] text-white hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1>{localStorage.getItem("name")}</h1>
        <h1>{localStorage.getItem("email")}</h1>
        <img
          className="h-[100px] w-[100px]"
          src={localStorage.getItem("profilePic")}
        />
      </div>
    </div>
  );
};

export default Login;
