import React, { useRef, useContext } from 'react'

import styles from './SignupModal.module.css'
import { Modal, Button, Typography, TextField } from '@material-ui/core'
import { Box } from '@mui/system'
import { signup } from '../constants/constants'
import { MyContext } from '../contexts/MyContext'

const SignupModal = ({ openSignup, handleCloseSignup }) => {
  // context
  const { selectedColors, setSelectedColors, userData, setUserData } =
    useContext(MyContext)

  // ref from form
  const emailRef = useRef()
  const passwordRef = useRef()

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  // function to handle signup
  const handleSignup = async () => {
    const email = emailRef.current.value
    const password = passwordRef.current.value
    if (!email || !password || email.length === 0 || password.length === 0) {
      alert('invalid input')
    }

    const response = await signup(
      emailRef.current.value,
      passwordRef.current.value
    )

    if (response !== null) {
      setUserData(response)
      alert('signed up and signed in')
    } else {
      alert('invalid input / user already exists')
    }
  }

  return (
    <div>
      <Modal
        open={openSignup}
        onClose={handleCloseSignup}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={styles.box}>
          <Typography variant="h2" component="div" gutterBottom>
            Sign Up
          </Typography>

          {/* Form */}
          <Box
            className={styles.form}
            component="form"
            sx={{
              '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="email"
              type="email"
              label="Email"
              inputRef={emailRef}
              required
            />
            <TextField
              id="password"
              type="password"
              label="Password"
              inputRef={passwordRef}
              required
            />
            <Button
              onClick={handleSignup}
              id="sign-up-button"
              variant="outlined"
              size="large"
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default SignupModal
