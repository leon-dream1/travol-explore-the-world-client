import { createContext, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  const logOut = () => {
    return signOut(auth);
  };

  const logInWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const faceBookProvider = new FacebookAuthProvider();
  const faceBookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, faceBookProvider);
  };
  
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  console.log(loading);

  const contextValue = {
    user,
    loading,
    createUser,
    updateUserProfile,
    logOut,
    logInWithEmailAndPassword,
    googleLogin,
    faceBookLogin,
    setUser, 
    setLoading
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element,
};

export default AuthProvider;
