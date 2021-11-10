import { useState } from "react";

import "./Player.css";
import PlayerName from "./PlayerName";
import React from "react";
import Card from "@mui/material/Card";
import ColorPicker from "./ColorPicker";
import { ColorContext } from "../contexts/ColorContext";

const Player = ({ playerName }) => {
  // using context now ColorContext
  // const Player = ({ colorArray, setColorArray, playerName }) => {

  const [color, setColor] = useState("white");

  return (
    <div>
      <ColorContext.Provider value={{ color, setColor }}>
        <Card className="card" style={{ background: color }}>
          <PlayerName playerName={playerName}></PlayerName>
          <ColorPicker />
        </Card>
      </ColorContext.Provider>
    </div>
  );
};

export default Player;
