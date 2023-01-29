import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { Link } from "react-router-dom";
const Profile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  })
  
  const logOut = async () => {
    await signOut(auth);
    window.localStorage.clear();
  };
  return (
    <div className="flex flex-row space-x-28">
      <div className="flex flex-row justify-center items-center">
        <h1>
          {user ? localStorage.getItem("name") : <Link to="/login">Login</Link>}
        </h1>
      </div>
      <button onClick={logOut}>{user ?"Log Out" : ""}</button>
    </div>
  );
};

export default Profile;
