import "./App.css";
import Lobby from "./components/Lobby";
import React from "react";
import MyContextProvider from "./contexts/MyContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* persistent elements like navbar live outside of router
      children of router must be route or fragment
      v6 doesnt use =component or switch */}
      <MyContextProvider>
        {/* <ButtonAppBar /> */}
        <Router>
          <Routes>
            {/* There is only one page so / */}
            <Route exact path="/" element={<Lobby />} />
          </Routes>
        </Router>
      </MyContextProvider>
    </div>
  );
}

export default App;
