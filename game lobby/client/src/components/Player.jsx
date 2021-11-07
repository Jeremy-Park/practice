import { useState } from "react";

import "./Player.css";
import PlayerName from "./PlayerName";
import React from "react";
import Card from "@mui/material/Card";
import ColorPicker from "./ColorPicker";

const Player = ({ colorArray, setColorArray, playerName }) => {
  const [color, setColor] = useState("white");

  return (
    <div>
      <Card className="card" style={{ background: color }}>
        <PlayerName playerName={playerName}></PlayerName>
        <ColorPicker
          color={color}
          setColor={setColor}
          colorArray={colorArray}
          setColorArray={setColorArray}
        />
      </Card>
    </div>
  );
};

export default Player;
