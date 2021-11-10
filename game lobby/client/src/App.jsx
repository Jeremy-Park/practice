import { useState } from "react";

import "./App.css";
import Lobby from "./components/Lobby";
import Player from "./components/Player";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* persistent elements like navbar live outside of router
      children of router must be route or fragment
      v6 doesnt use =component or switch */}
      <Router>
        <Routes>
          {/* There is only one page so / */}
          <Route exact path="/" element={<Lobby />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
