import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { AuthContext } from "./MixContext";

const AuthProfider = ({ children }) => {
  // register
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const data = { register, signIn };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProfider;
