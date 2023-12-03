/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";


export const AuthContext = createContext();
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleUpdateProfile = (name, img) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: img,
    });
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  const authentication = {
    googleLogin,
    signIn,
    signUp,
    handleUpdateProfile,
    logOut,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
