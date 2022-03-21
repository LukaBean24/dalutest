import React from 'react'
import logo from '../photos/logo.png'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <div className='logo'>
          <Typography variant='h4' color='primary'>
            Moviex
          </Typography>
        </div>
        <div className='register'>
          <Button variant='outlined' color='primary' className='button'>
            <Typography variant='button'>Register</Typography>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
