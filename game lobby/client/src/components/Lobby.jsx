import { useState } from "react";
import React from "react";
import Player from "./Player";
import "./Lobby.css";
import { ColorArrayContext } from "../contexts/ColorArrayContext";
import { Button } from "@material-ui/core";
// import { getAuth, signOut } from 'firebase/auth'

const Lobby = () => {
  const [colorArray, setColorArray] = useState([]);

  return (
    <div className="lobby">
      {/* <h1 className="game_lobby">Game Lobby</h1> */}

      <ColorArrayContext.Provider value={{ colorArray, setColorArray }}>
        <div className="player_group">
          <Player playerName="Player 1" />
          <Player playerName="Player 2" />
          <Player playerName="Player 3" />
          <Player playerName="Player 4" />
        </div>
      </ColorArrayContext.Provider>
      <Button
        // onClick={() => signOut(getAuth())}
        id="sign-up-button"
        variant="outlined"
        size="large"
      >
        Sign out
      </Button>
    </div>
  );
};

export default Lobby;
