import { useContext } from "react";

import "./Player.css";
import React from "react";
import Card from "@mui/material/Card";
import ColorPicker from "./ColorPicker";
import { MyContext } from "../contexts/MyContext";

const Player = ({ playerIndex }) => {

  const value = useContext(MyContext);
  const [selectedColors, setSelectedColors] = value.selectedColors;

  return (
    <div>
        <Card className="card" style={{background: selectedColors[playerIndex]}}>
          <div>Player {playerIndex}</div>
          <ColorPicker playerIndex={playerIndex}/>
        </Card>
    </div>
  );
};

export default Player;
