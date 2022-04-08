import { useState, useContext, useEffect } from "react";
import React from "react";
import Player from "./Player";
import "./Lobby.css";
import { Button } from "@material-ui/core";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { MyContext } from "../contexts/MyContext";
import { auth } from "../firebase";
import { getAuth } from "firebase/auth";
import SignupModal from "./SignupModal";
import SigninModal from "./SigninModal";
import { getFunctions, httpsCallable } from "firebase/functions";

const Lobby = () => {
  const value = useContext(MyContext);
  const functions = getFunctions();
  const [disabledColors, setDisabledColors] = value.disabledColors;
  const [selectedColors, setSelectedColors] = value.selectedColors;
  const [emailState, setEmailState] = useState("Guest");

  const [openSignup, setOpenSignup] = useState(false);
  const handleOpenSignup = () => setOpenSignup(true);
  const handleCloseSignup = () => setOpenSignup(false);

  const [openSignin, setOpenSignin] = useState(false);
  const handleOpenSignin = () => setOpenSignin(true);
  const handleCloseSignin = () => setOpenSignin(false);

  const [signinState, setSigninState] = useState(false);
  const [signupState, setSignupState] = useState(false);
  const [signoutState, setSignoutState] = useState(true);

  function getUserData() {
    const getData = httpsCallable(functions, "getData");
    getData()
      .then((result) => {
        // Read result of the Cloud Function.
        const data = result.data;
        console.log(data.disabledColors);
        console.log(data.selectedColors);
        setDisabledColors(data.disabledColors);
        setSelectedColors(data.selectedColors);
      })
      .catch((error) => {
        // Getting the Error details.
        // const code = error.code;
        const message = error.message;
        // const details = error.details;
        console.log(message);
      });
  }

  function setUserData() {
    const setData = httpsCallable(functions, "setData");
    setData({ disabledColors: disabledColors, selectedColors: selectedColors })
      .then((result) => {})
      .catch((error) => {
        // Getting the Error details.
        // const code = error.code;
        const message = error.message;
        // const details = error.details;
        console.log(message);
      });
  }

  useEffect(() => {
    if (auth.currentUser) {
    setUserData();}
    return;
  }, [disabledColors]);

  useEffect(() => {
    if (auth.currentUser) {
    setUserData(); }
    return;
  }, [selectedColors]);

  const auth = getAuth();

  // var unsubscribe = onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     console.log(user.uid);
  //     setSigninState(true);
  //     setSignupState(true);
  //     setSignoutState(false);
  //     handleCloseSignin();
  //     handleCloseSignup();
  //     getUserData();
  //   } else {
  //     setDisabledColors([]);
  //     setSelectedColors(["white", "white", "white", "white"]);
  //     setEmailState("Guest");
  //     setSigninState(false);
  //     setSignupState(false);
  //     setSignoutState(true);
  //     console.log("signed out");
  //   }
  // });

  const handleSignin = () => {
    console.log(auth.currentUser.uid);
    setEmailState(auth.currentUser.email);
    setSigninState(true);
    setSignupState(true);
    setSignoutState(false);
    handleCloseSignin();
    handleCloseSignup();
    getUserData();
  };

  // signout
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        setDisabledColors([]);
        setSelectedColors(["white", "white", "white", "white"]);
        setEmailState("Guest");
        setSigninState(false);
        setSignupState(false);
        setSignoutState(true);
        console.log("signed out");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="lobby">
      <SignupModal
        openSignup={openSignup}
        handleCloseSignup={handleCloseSignup}
        handleSignin={handleSignin}
      />
      <SigninModal
        openSignin={openSignin}
        handleCloseSignin={handleCloseSignin}
        handleSignin={handleSignin}
      />

      <div className="buttonGroup">
        <Button
          className="signinButton"
          onClick={handleOpenSignin}
          disabled={signinState}
        >
          Sign In
        </Button>
        <Button
          className="signupButton"
          onClick={handleOpenSignup}
          disabled={signupState}
        >
          Sign Up
        </Button>
        <Button
          className="signoutButton"
          onClick={handleSignout}
          disabled={signoutState}
        >
          Sign Out
        </Button>
      </div>
      <div className="userInfo">{emailState}</div>
      <div className="player_group">
        <Player playerIndex={0} />
        <Player playerIndex={1} />
        <Player playerIndex={2} />
        <Player playerIndex={3} />
      </div>
    </div>
  );
};

export default Lobby;
