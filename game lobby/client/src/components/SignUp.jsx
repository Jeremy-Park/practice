import React from "react";
import { useRef, useState } from "react";

import { Box } from "@mui/system";
import { Typography, TextField, Card, Button } from "@material-ui/core";

import "./SignUp.css";

import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
} from "firebase/auth";

function SignUp() {
  // ref from form
  const emailRef = useRef();
  const passwordRef = useRef();

  // signup function is called with button onclick
  // signup function can fail - signing up with existing email etc
  function handleSignup() {
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  }

  return (
    <Box id="sign-up-box">
      <Card id="sign-up-card" elevation="5">
        {/* Sign up */}
        <Typography variant="h2" component="div" gutterBottom>
          Sign Up
        </Typography>

        {/* Form */}
        <Box
          id="sign-up-form"
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
            onClick={handleSignup}
            id="sign-up-button"
            variant="outlined"
            size="large"
          >
            Sign Up
          </Button>
        </Box>
      </Card>
      <Typography variant="p" component="div" gutterBottom>
        Already have an account? Log in
      </Typography>{" "}
    </Box>
  );
}

export default SignUp;
