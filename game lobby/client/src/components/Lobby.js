import { useState, useContext, useEffect } from 'react'
import React from 'react'
import Player from './Player'
import './Lobby.css'
import { Button } from '@material-ui/core'
import { MyContext } from '../contexts/MyContext'
import SignupModal from './SignupModal'
import SigninModal from './SigninModal'

const Lobby = () => {
  const { selectedColors, setSelectedColors } = useContext(MyContext)
  const [emailState, setEmailState] = useState('Guest')

  const [openSignup, setOpenSignup] = useState(false)
  const handleOpenSignup = () => setOpenSignup(true)
  const handleCloseSignup = () => setOpenSignup(false)

  const [openSignin, setOpenSignin] = useState(false)
  const handleOpenSignin = () => setOpenSignin(true)
  const handleCloseSignin = () => setOpenSignin(false)

  const [signinState, setSigninState] = useState(false)
  const [signupState, setSignupState] = useState(false)
  const [signoutState, setSignoutState] = useState(true)

  function getUserData() {
    console.log('get user data')
  }

  function setUserData() {
    console.log('set user data')
  }

  const handleSignin = () => {
    console.log('handle sign in')
  }

  // signout
  const handleSignout = () => {
    console.log('handle sign out')
  }

  return (
    <div className="lobby">
      <SignupModal
        openSignup={openSignup}
        handleCloseSignup={handleCloseSignup}
        handleSignin={handleSignin}
      />
      <SigninModal
        openSignin={openSignin}
        handleCloseSignin={handleCloseSignin}
        handleSignin={handleSignin}
      />

      <div className="buttonGroup">
        <Button
          className="signinButton"
          onClick={handleOpenSignin}
          disabled={signinState}
        >
          Sign In
        </Button>
        <Button
          className="signupButton"
          onClick={handleOpenSignup}
          disabled={signupState}
        >
          Sign Up
        </Button>
        <Button
          className="signoutButton"
          onClick={handleSignout}
          disabled={signoutState}
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
