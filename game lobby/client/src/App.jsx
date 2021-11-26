import { useState } from "react";

import "./App.css";
import Lobby from "./components/Lobby";
import AppBar from "./components/AppBar";
import React from "react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* persistent elements like navbar live outside of router
      children of router must be route or fragment
      v6 doesnt use =component or switch */}
      <AppBar />

      <Router>
        <Routes>
          {/* There is only one page so / */}
          <Route exact path="/" element={<Lobby />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
