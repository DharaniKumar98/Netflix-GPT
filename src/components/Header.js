import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO_URL, USER_ICON_URL } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOutClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // this will be called when the component unmounts 
    // (this will remove the eventlistener attached by onAuthStateChanged)
    return () => unSubscribe();
  }, []);

  return (
    <div className="absolute px-8 py-2 w-screen bg-gradient-to-b flex justify-between from-black z-10">
      <img
        className="w-44"
        src={NETFLIX_LOGO_URL}
        alt="logo"
      />
      {user && (
        <div className="flex">
          <img
            className="w-10 h-10 m-3"
            src={USER_ICON_URL}
            alt="userIcon"
          />
          <button className="text-white" onClick={handleSignOutClick}>SignOut</button>
        </div>
      )}
    </div>
  );
};

export default Header;
