
import React, { useContext, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import {GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const Login = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState({});
    const provider = new GoogleAuthProvider();

    onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
    })

    const signInWithGoogle = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
          const name = result.user.displayName;
          localStorage.setItem("name", name);
          setIsAuth(true);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const logOut = async ()=>{
        await signOut(auth);
    }
  return (
    <div>
      {!isAuth ? (
        <button onClick={signInWithGoogle}>Sign In With Google</button>
      ) : (
        <div>
          {user?.name}
          {console.log(user)}

          <button onClick={logOut}>Log Out</button>
        </div>
      )}
    </div>
  );
}

export default Login;