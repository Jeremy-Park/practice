import React from "react";
import { useRef, useState } from "react";

import { Box } from "@mui/system";
import { Typography, TextField, Card, Button } from "@material-ui/core";

import "./SignIn.css";

import { auth } from "../firebase";
import {
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
} from "firebase/auth";

function SignIn() {
  // ref from form
  const emailRef = useRef();
  const passwordRef = useRef();

  // signup function is called with button onclick
  // signup function can fail - signing up with existing email etc
  function handleSignIn() {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        return signInWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  return (
    <Box id="sign-in-box">
      <Card id="sign-in-card" elevation="5">
        {/* Sign up */}
        <Typography variant="h2" component="div" gutterBottom>
          Sign In
        </Typography>

        {/* Form */}
        <Box
          id="sign-in-form"
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="email"
            type="email"
            label="Email"
            inputRef={emailRef}
            required
          />
          <TextField
            id="password"
            type="password"
            label="Password"
            inputRef={passwordRef}
            required
          />
          <Button
            onClick={handleSignIn}
            id="sign-in-button"
            variant="outlined"
            size="large"
          >
            Sign In
          </Button>
        </Box>
      </Card>
      <Typography variant="p" component="div" gutterBottom>
        Already have an account? Log in
      </Typography>{" "}
    </Box>
  );
}

export default SignIn;
