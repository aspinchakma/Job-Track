import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { AuthContext } from "./MixContext";

const AuthProfider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(false);
    });

    return () => unSubscribed();
  }, []);

  // reset password
  const handleResetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // sign out
  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };
  const data = {
    register,
    signIn,
    user,
    setUser,
    handleSignOut,
    handleResetPassword,
    isLoading,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProfider;
