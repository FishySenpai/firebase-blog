import React from "react";
import { useState, useContext } from "react";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
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
    <div className="relative flex flex-col justify-center pt-6">
      <div className="">
        <button className="bg-gray-500 p-6 rounded-md" onClick={signInWithGoogle}>
          Sign in With google
        </button>
      </div>
    </div>
  );
};

export default Login;
