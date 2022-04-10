import React, { useRef } from 'react'

import styles from './SignupModal.module.css'
import { Modal, Button, Typography, TextField } from '@material-ui/core'
import { Box } from '@mui/system'
import { signup } from '../constants/constants'

const SignupModal = ({ openSignup, handleCloseSignup, handleSignin }) => {
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
    signup(emailRef.current.value, passwordRef.current.value)
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
