import { useState, useContext, useEffect } from 'react'
import React from 'react'
import Player from './Player'
import './Lobby.css'
import { Button } from '@material-ui/core'
import { MyContext } from '../contexts/MyContext'
import SignupModal from './SignupModal'
import SigninModal from './SigninModal'

const Lobby = () => {
  const { selectedColors, setSelectedColors, userData, setUserData } =
    useContext(MyContext)
  const [emailState, setEmailState] = useState('Guest')

  const [openSignup, setOpenSignup] = useState(false)
  const handleOpenSignup = () => setOpenSignup(true)
  const handleCloseSignup = () => setOpenSignup(false)

  const [openSignin, setOpenSignin] = useState(false)
  const handleOpenSignin = () => setOpenSignin(true)
  const handleCloseSignin = () => setOpenSignin(false)

  // signout
  const handleSignout = () => {
    setUserData(null)
    setSelectedColors(['white', 'white', 'white', 'white'])
    console.log("handle sign out")
  }

  return (
    <div className="lobby">
      <SignupModal
        openSignup={openSignup}
        handleCloseSignup={handleCloseSignup}
      />
      <SigninModal
        openSignin={openSignin}
        handleCloseSignin={handleCloseSignin}
      />

      <div className="buttonGroup">
        <Button
          className="signinButton"
          onClick={handleOpenSignin}
          disabled={userData !== null}
        >
          Sign In
        </Button>
        <Button
          className="signupButton"
          onClick={handleOpenSignup}
          disabled={userData !== null}
        >
          Sign Up
        </Button>
        <Button
          className="signoutButton"
          onClick={handleSignout}
          disabled={userData === null}
        >
          Sign Out
        </Button>
      </div>
      <div className="userInfo">{emailState}</div>
      <div className="player_group">
        <Player playerIndex={0} />
        <Player playerIndex={1} />
        <Player playerIndex={2} />
        <Player playerIndex={3} />
      </div>
    </div>
  )
}

export default Lobby
