import { Button, TextField, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [passwordInvalid, setPasswordInvalid] = useState(false)
  const [emailInvalid, setEmailInvalid] = useState(false)
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const emailHandler = (e) => {
    setEmail(e.target.value)
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }

  const submitHandler = () => {
    if (email.match(mailformat)) {
      setEmailInvalid(false)
    } else {
      setEmailInvalid(true)
    }

    if (password.length > 6) {
      setPasswordInvalid(false)
    } else {
      setPasswordInvalid(true)
    }

    console.log(emailInvalid)
  }
  return (
    <>
      <Navbar />
      <div className='container'>
        <img
          src='https://media.baamboozle.com/uploads/images/410104/1636047346_447449.jpeg'
          alt=''
        />
        <div className='login-container'>
          <div className='header'>
            <Typography
              variant='h5'
              align='left'
              color='black'
              fontWeight='medium'
            >
              Welcome.
            </Typography>
            <Typography
              variant='h5'
              color='black'
              align='left'
              fontWeight='medium'
            >
              Joining Moviex is easy
            </Typography>
            <Typography variant='body2' align='left' color='black'>
              Login to your account and watch endlessly
            </Typography>
          </div>
          <div className='inputs'>
            <Typography
              color='black'
              variant='body2'
              sx={{ marginTop: '0.5rem' }}
            >
              Your Email
            </Typography>
            <TextField
              label='Email'
              placeholder='Enter Your Email Here'
              variant='outlined'
              color='primary'
              margin='dense'
              className='input'
              onChange={emailHandler}
              autoFocus={true}
              helperText={emailInvalid ? 'Invalid Email' : ''}
              required
              error={emailInvalid}
            />
            <Typography
              color='black'
              variant='body2'
              sx={{ marginTop: '0.5rem' }}
            >
              Your Password
            </Typography>
            <TextField
              size='regular'
              required
              label='Password'
              placeholder='Enter Your Password Here'
              variant='outlined'
              color='primary'
              margin='normal'
              className='input'
              type='password'
              helperText={passwordInvalid ? 'Invalid Password' : ''}
              onChange={passwordHandler}
              error={passwordInvalid}
            />
            <a href='#' className='info'>
              <Typography variant='body2' className='info'>
                Forgot Password?
              </Typography>
            </a>
            <Button
              variant='contained'
              fullWidth
              size='large'
              color='primary'
              sx={{ marginTop: '2rem' }}
              onClick={submitHandler}
            >
              Sign In
            </Button>
            <div className='social-buttons'>
              <div className='horizontal'>
                <span></span>
                <div className='text'>
                  <Typography variant='body2' color='black'>
                    OR
                  </Typography>
                </div>
                <span></span>
              </div>
              <Button
                sx={{ margin: '1rem 0' }}
                variant='contained'
                color='secondary'
                size='large'
                fullWidth
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transitionDuration: 0.2,
                  }}
                >
                  <Typography variant='body2' color='primary'>
                    Continue With Google
                  </Typography>
                </motion.div>
              </Button>

              <Button
                sx={{ margin: '1rem 0' }}
                variant='contained'
                color='secondary'
                size='large'
                fullWidth
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transitionDuration: 0.2,
                  }}
                >
                  <Typography variant='body2' color='primary'>
                    Continue With Facebook
                  </Typography>
                </motion.div>
              </Button>

              <Button
                sx={{ margin: '1rem 0' }}
                variant='contained'
                color='secondary'
                size='large'
                fullWidth
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transitionDuration: 0.2,
                  }}
                >
                  <Typography variant='body2' color='primary'>
                    Continue With Apple
                  </Typography>
                </motion.div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
