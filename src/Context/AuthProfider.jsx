import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { AuthContext } from "./MixContext";

const AuthProfider = ({ children }) => {
  const [user, setUser] = useState(null);
  // register
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // checking stage
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (userInfo) => {
      if (userInfo) {
        setUser(userInfo);
      }
    });

    return () => unSubscribed();
  }, []);
  console.log(user);
  const data = { register, signIn };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProfider;
