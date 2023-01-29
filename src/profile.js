import React, { useContext, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase-config";
const Profile = () => {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logOut = async () => {
    await signOut(auth);
  };
  return (
    <div>
      {user?.email}
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default Profile;
