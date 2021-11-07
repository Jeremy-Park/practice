import { useState } from "react";
import React from "react";
import Player from "./Player";
import "./Lobby.css";

const Lobby = () => {
  const [colorArray, setColorArray] = useState([]);

  return (
    <div className="lobby">

      <h1 className="game_lobby">Game Lobby</h1>
      <div className="player_group">
        <Player
          colorArray={colorArray}
          setColorArray={setColorArray}
          playerName="Player 1"
        />
        <Player
          colorArray={colorArray}
          setColorArray={setColorArray}
          playerName="Player 2"
        />
        <Player
          colorArray={colorArray}
          setColorArray={setColorArray}
          playerName="Player 3"
        />
        <Player
          colorArray={colorArray}
          setColorArray={setColorArray}
          playerName="Player 4"
        />
      </div>
    </div>
  );
};

export default Lobby;
